import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ResumeModule } from './resume/resume.module';
import { configModule, graphQLModule } from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// TODO Healthcheck
@Module({
  imports: [configModule, graphQLModule, PrismaModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
