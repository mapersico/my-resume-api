import { FILE_REPOSITORY } from 'src/core/constants';
import { File } from '../entities/file.entity';

export const fileProviders = [
  {
    provide: FILE_REPOSITORY,
    useValue: File,
  },
];
