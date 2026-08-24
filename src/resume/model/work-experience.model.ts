import { Field, ID, ObjectType } from '@nestjs/graphql';
import { CompanyModel } from './company.model';

@ObjectType()
export class WorkExperienceModel {
  @Field(() => ID)
  id!: string;

  @Field()
  position!: string;
  // TODO мапперы дат для фронта
  @Field()
  startDate!: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  description?: string;

  @Field(() => CompanyModel)
  company!: CompanyModel;
}
