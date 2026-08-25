import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ResumeModule } from './resume/resume.module';
import { configModule, graphQLModule } from './config';
import { HealthController } from './health.controller';
// TODO Healthcheck
@Module({
  imports: [configModule, graphQLModule, PrismaModule, ResumeModule],
  controllers: [HealthController],
})
export class AppModule {}
