import { Injectable } from '@nestjs/common';
import { Resume } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

// TODO где хранить
// @ts-ignore
export const resumeSelectFields: Set<keyof Resume> = new Set([
  'id',
  'title',
  'workFormat',
  'employmentType',
  'phone',
  'email',
  'about',
  'createdAt',
  'updatedAt',
  'skills',
  'experiences',
]);

type ResumeSelectParams = Partial<Record<keyof Resume, true>>;

@Injectable()
export class ResumeService {
  constructor(private readonly prisma: PrismaService) {}

  async getResumes(select: ResumeSelectParams) {
    return await this.prisma.resume.findMany({
      select,
    });
  }
}
