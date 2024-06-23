import { Controller, Get, Param, Query } from '@nestjs/common';

import { JobService } from './job.service';
import { Job } from '../../core/database/entities';

@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('get-by-code/:code')
  async getByCode(
    @Param('code') code: string,
    @Query('lang') lang: string,
  ): Promise<Job | null> {
    return await this.jobService.getByJobCode(code, lang);
  }

  @Get('get-all')
  async getAll(@Query('lang') lang: string): Promise<Job[]> {
    return await this.jobService.getAllJobs(lang);
  }
}
