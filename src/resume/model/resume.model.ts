import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { EmploymentType, WorkFormat } from '@prisma/client';
import { WorkExperienceModel } from './work-experience.model';
import { SkillModel } from './skill.model';

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

  @Field(() => EmploymentType)
  employmentType!: EmploymentType;

  @Field()
  phone!: string;

  @Field()
  email!: string;

  @Field(() => [SkillModel], { nullable: true, defaultValue: [] })
  skills?: SkillModel[];

  @Field(() => [WorkExperienceModel], { nullable: true })
  experiences?: WorkExperienceModel[];
}
