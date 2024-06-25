import { Controller, Get, Headers, Param } from '@nestjs/common';

import { JobService } from './job.service';
import { Job } from '../../core/database/entities';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('jobs')
@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('get-by-code/:code')
  async getByCode(
    @Param('code') code: string,
    @Headers('Language') lang: string,
  ): Promise<Job | null> {
    return await this.jobService.getByJobCode(code, lang);
  }

  @Get('get-all')
  async getAll(@Headers('Language') lang: string): Promise<Job[]> {
    return await this.jobService.getAllJobs(lang);
  }
}
