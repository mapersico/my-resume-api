import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FileService } from './file.service';

import { fileProviders } from '../../core/database/providers';

@Module({
  controllers: [FileController],
  providers: [FileService, ...fileProviders],
  exports: [FileService],
})
export class FileModule {}
