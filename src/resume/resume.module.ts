import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import { ResumeResolver } from './resume.resolver';
import {
  RESUME_SELECT_BUILDER_TOKEN,
  resumeSelectBuilder,
} from './utils/resume-select.builder';

@Module({
  controllers: [ResumeController],
  providers: [
    ResumeService,
    {
      provide: RESUME_SELECT_BUILDER_TOKEN,
      useFactory: () => resumeSelectBuilder,
    },
    ResumeResolver,
  ],
})
export class ResumeModule {}
