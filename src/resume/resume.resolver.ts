// TODO порядок испортов - линтер
import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { ResumeService } from './resume.service';
import { ResumeModel } from './model/resume.model';
import type { GraphQLResolveInfo } from 'graphql';
import { PrismaSelectBuilder } from 'src/utils/prisma-select';
import { Inject } from '@nestjs/common';
import { RESUME_SELECT_BUILDER_TOKEN } from './utils/resume-select.builder';

@Resolver(() => ResumeModel)
export class ResumeResolver {
  constructor(
    private readonly resumeService: ResumeService,
    @Inject(RESUME_SELECT_BUILDER_TOKEN)
    private readonly selectBuilder: PrismaSelectBuilder,
  ) {}
  // TODO тип возвращаемый
  @Query(() => [ResumeModel], { name: 'resumes' })
  getResumes(@Info() info: GraphQLResolveInfo) {
    const select = this.selectBuilder.build(info);

    return this.resumeService.getResumes(select);
  }

  @Query(() => ResumeModel, { name: 'resume', nullable: true })
  findOne(@Args('id') id: string, @Info() info: GraphQLResolveInfo) {
    const select = this.selectBuilder.build(info);
    return this.resumeService.getResume(id, select);
  }
}
// TODO
// Сделать создание резюме???
// Сделать ФРОНТ с курсором.
// Прочитать как переиспользовтаь модели на фронте
