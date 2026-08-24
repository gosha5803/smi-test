import { Injectable } from '@nestjs/common';
import { Prisma, Resume } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
// TODO синкануть с билдером select
type ResumeSelectParams = Partial<Record<keyof Resume, true>>;

@Injectable()
export class ResumeService {
  constructor(private readonly prisma: PrismaService) {}

  async getResumes(
    select: ResumeSelectParams,
    title?: string,
  ): Promise<Partial<Resume>[]> {
    const where: Prisma.ResumeWhereInput = title
      ? {
          title: { contains: title },
        }
      : {};

    return await this.prisma.resume.findMany({
      select,
      where,
    });
  }

  async getResume(
    id: string,
    select: ResumeSelectParams,
  ): Promise<Partial<Resume> | null> {
    return await this.prisma.resume.findUnique({
      select,
      where: {
        id,
      },
    });
  }
}
