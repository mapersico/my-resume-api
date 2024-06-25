import { Controller, Get, Headers, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ApplicationService } from './application.service';

@ApiTags('applications')
@Controller('applications')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Get('get-by-code/:code')
  async getByCode(
    @Param('code') code: string,
    @Headers('Language') lang: string,
  ) {
    return await this.applicationService.getAppByCode(code, lang);
  }

  @Get('get-all')
  async getAll(@Headers('Language') lang: string) {
    return await this.applicationService.getAllApplications(lang);
  }
}
