import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { EmploymentType, WorkFormat } from '@prisma/client';

registerEnumType(WorkFormat, { name: 'WorkFormat' });
registerEnumType(EmploymentType, { name: 'EmploymentType' });

@ObjectType()
export class ResumeModel {
  @Field(() => ID)
  id!: string;

  @Field()
  title!: string;

  @Field(() => WorkFormat)
  workFormat!: WorkFormat;
  // TODO TS
  @Field(() => EmploymentType)
  employmentType!: EmploymentType;

  @Field()
  phone!: string;

  @Field()
  email!: string;
}
