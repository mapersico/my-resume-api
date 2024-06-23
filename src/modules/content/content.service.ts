import { Inject, Injectable } from '@nestjs/common';

import { CONTENT_REPOSITORY } from '../../core/constants';
import { Content } from '../../core/database/entities';

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
