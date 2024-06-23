import { Module } from '@nestjs/common';

import { contentProviders } from '../../core/database/providers/content.providers';

import { ContentService } from './content.service';
import { ContentController } from './content.controller';

@Module({
  providers: [ContentService, ...contentProviders],
  exports: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
