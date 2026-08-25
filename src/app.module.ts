import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ResumeModule } from './resume/resume.module';
import { configModule, graphQLModule } from './config';
// TODO Healthcheck
@Module({
  imports: [configModule, graphQLModule, PrismaModule, ResumeModule],
})
export class AppModule {}
