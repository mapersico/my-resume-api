import { Inject, Injectable } from '@nestjs/common';

import { CONTENT_REPOSITORY } from 'src/core/constants';
import { Content } from 'src/core/database/entities/content.entity';

@Injectable()
export class ContentService {
  constructor(
    @Inject(CONTENT_REPOSITORY)
    private readonly contentRepository: typeof Content,
  ) {}

  async getPageContentByKey(key: string) {
    return await this.contentRepository.findOne({ where: { key } });
  }
}
