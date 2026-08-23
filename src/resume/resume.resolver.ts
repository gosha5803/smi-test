import { Args, Info, Query, Resolver } from '@nestjs/graphql';
import { resumeSelectFields, ResumeService } from './resume.service';
import { ResumeModel } from './model/resume.model';
import { GetResumesArgs } from './dto/get-resumes.args';
import type { GraphQLResolveInfo } from 'graphql';
import { buildPrismaSelect } from 'src/utils/prisma-select';

@Resolver(() => ResumeModel)
export class ResumeResolver {
  constructor(private readonly resumeService: ResumeService) {}

  @Query(() => [ResumeModel], { name: 'resumes' })
  getResumes(@Info() info: GraphQLResolveInfo) {
    const select = buildPrismaSelect(info, resumeSelectFields);
    return this.resumeService.getResumes(select);
  }
}
