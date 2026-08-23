import { Injectable } from '@nestjs/common';
import { Resume } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

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
