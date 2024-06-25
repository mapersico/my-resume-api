import { Controller, Get, Headers, StreamableFile } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FileService } from './file.service';

@ApiTags('file')
@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('resume')
  async getResumeFile(
    @Headers('Language') lang: string,
  ): Promise<StreamableFile> {
    const fileBuffer = await this.fileService.getResumeFileByLanguage(lang);

    return new StreamableFile(fileBuffer, {
      type: 'application/pdf',
      disposition: `attachment; filename="${lang}-resume.pdf"`,
    });
  }
}
