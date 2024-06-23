import { Controller, Get, Query, StreamableFile } from '@nestjs/common';

import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('resume')
  async getResumeFile(@Query('lang') lang: string): Promise<StreamableFile> {
    const fileBuffer = await this.fileService.getResumeFileByLanguage(lang);

    return new StreamableFile(fileBuffer, {
      type: 'application/pdf',
      disposition: `attachment; filename="${lang}-resume.pdf"`,
    });
  }
}
