import { Injectable } from '@nestjs/common';
import { Resume } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
// TODO синкануть с билдером select
type ResumeSelectParams = Partial<Record<keyof Resume, true>>;

@Injectable()
export class ResumeService {
  constructor(private readonly prisma: PrismaService) {}

  async getResumes(select: ResumeSelectParams): Promise<Partial<Resume>[]> {
    return await this.prisma.resume.findMany({
      select,
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
