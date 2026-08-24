import { PrismaSelectBuilder } from 'src/utils/prisma-select';

export const RESUME_SELECT_BUILDER_TOKEN = 'RESUME_SELECT_BUILDER_TOKEN';

export const resumeSelectBuilder = new PrismaSelectBuilder(
  new Set([
    'id',
    'title',
    'workFormat',
    'employmentType',
    'phone',
    'email',
    'about',
    'createdAt',
    'updatedAt',
  ]),
  {
    skills: {
      fields: new Set(['id', 'name']),
    },
    experiences: {
      fields: new Set([
        'id',
        'position',
        'startDate',
        'endDate',
        'description',
      ]),
      relations: {
        company: {
          fields: new Set(['id', 'name', 'description']),
        },
      },
    },
  },
);
