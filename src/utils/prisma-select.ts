// src/common/utils/prisma-select.util.ts
import { GraphQLResolveInfo, Kind } from 'graphql';
// TODO сделать классом
export function buildPrismaSelect<T extends Record<string, any>>(
  info: GraphQLResolveInfo,
  acceptableFields: Set<keyof T>,
): Partial<Record<keyof T, true>> {
  const fields = info.fieldNodes[0]?.selectionSet?.selections ?? [];
  const result = {};

  for (const field of fields) {
    if (field.kind !== Kind.FIELD) {
      return result;
    }
    const fieldName = field.name.value;

    if (acceptableFields.has(fieldName)) {
      result[fieldName] = true;
    }
  }

  return result;
}
