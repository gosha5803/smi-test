import { Controller, Get } from '@nestjs/common';
import { ResumeService } from './resume.service';

@Controller('/api/ui/v1/resume')
export class ResumeController {
  constructor(private readonly resumeService: ResumeService) {}
}
