import { Controller, Get, Query } from '@nestjs/common';

import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private contentService: ContentService) {}

  @Get('get-static-content')
  async getPageContentByKey(@Query('lang') lang: string) {
    return await this.contentService.getPageContentByKey(lang);
  }
}
