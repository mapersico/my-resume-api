import { Controller, Get, Param, Query } from '@nestjs/common';

import { ApplicationService } from './application.service';
import { Application } from '../../core/database/entities';

@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Get('get-by-code/:code')
  async getByCode(
    @Param('code') code: string,
    @Query('lang') lang: string,
  ): Promise<Application | null> {
    return await this.applicationService.getAppByCode(code, lang);
  }

  @Get('get-all')
  async getAll(@Query('lang') lang: string): Promise<Application[]> {
    return await this.applicationService.getAllApplications(lang);
  }
}
