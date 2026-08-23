import { Module } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { ResumeController } from './resume.controller';
import { ResumeResolver } from './resume.resolver';

@Module({
  controllers: [ResumeController],
  providers: [ResumeService, ResumeResolver],
})
export class ResumeModule {}
// TODO сделать динамический GraphQL и тудушки в призма
