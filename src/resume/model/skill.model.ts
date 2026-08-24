import { Field, ID, ObjectType } from '@nestjs/graphql';
import { ResumeModel } from './resume.model';

@ObjectType()
export class SkillModel {
  @Field(() => ID)
  id!: string;

  @Field()
  name!: string;

  @Field(() => [ResumeModel], { nullable: true })
  resumes?: ResumeModel[];
}
