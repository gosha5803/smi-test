import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ResumeModule } from './resume/resume.module';
import { configModule, graphQLModule } from './config';

@Module({
  imports: [configModule, graphQLModule, PrismaModule, ResumeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
