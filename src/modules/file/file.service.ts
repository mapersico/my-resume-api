import { Inject, Injectable } from '@nestjs/common';

import { FILE_REPOSITORY } from '../../core/constants';
import { File } from '../../core/database/entities';

@Injectable()
export class FileService {
  constructor(
    @Inject(FILE_REPOSITORY)
    private readonly fileRepository: typeof File,
  ) {}

  async getResumeFileByLanguage(lang: string): Promise<Buffer> {
    const resume = await this.fileRepository.findOne({ where: { lang } });
    if (!resume || !resume.file) {
      throw new Error(`File not found for language: ${lang}`);
    }

    const base64Data = resume.file.split(';base64,').pop();
    if (!base64Data) {
      throw new Error('Invalid data URL format');
    }

    const fileBuffer = Buffer.from(base64Data, 'base64');
    return fileBuffer;
  }
}
