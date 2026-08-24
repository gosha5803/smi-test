import { GraphQLResolveInfo } from 'graphql';
import { parseResolveInfo, ResolveTree } from 'graphql-parse-resolve-info';
// TODO тест
// TODO более строгий тип
interface RelationConfig {
  fields: Set<string>;
  relations?: Record<string, RelationConfig>;
}

export class PrismaSelectBuilder {
  constructor(
    private scalarFields: Set<string>,
    private relations: Record<string, RelationConfig> = {},
  ) {}

  build(info: GraphQLResolveInfo): Record<string, any> {
    const tree = parseResolveInfo(info) as ResolveTree;
    if (!tree) return { id: true };

    const typeName = Object.keys(tree.fieldsByTypeName)[0];
    if (!typeName) return { id: true };

    const fields = tree.fieldsByTypeName[typeName];
    if (!fields) return { id: true };

    return this.extractFields(fields);
  }

  private extractFields(
    fields: Record<string, ResolveTree>,
  ): Record<string, any> {
    const select: Record<string, any> = { id: true };

    for (const fieldName of Object.keys(fields)) {
      if (this.scalarFields.has(fieldName)) {
        select[fieldName] = true;
      } else if (fieldName in this.relations) {
        const relation = this.relations[fieldName];
        const childTree = fields[fieldName] as ResolveTree;
        const childTypeName = Object.keys(childTree.fieldsByTypeName)[0];
        const childFields = childTree.fieldsByTypeName[childTypeName] ?? {};

        select[fieldName] = {
          select: this.extractRelationFields(childFields, relation),
        };
      }
    }

    return select;
  }

  private extractRelationFields(
    fields: Record<string, ResolveTree>,
    config: RelationConfig,
  ): Record<string, any> {
    const select: Record<string, any> = { id: true };

    for (const fieldName of Object.keys(fields)) {
      if (config.fields.has(fieldName)) {
        select[fieldName] = true;
      } else if (config.relations && fieldName in config.relations) {
        const nestedRelation = config.relations[fieldName];
        const childTree = fields[fieldName] as ResolveTree;
        const childTypeName = Object.keys(childTree.fieldsByTypeName)[0];
        const childFields = childTree.fieldsByTypeName[childTypeName] ?? {};

        select[fieldName] = {
          select: this.extractRelationFields(childFields, nestedRelation),
        };
      }
    }

    return select;
  }
}
