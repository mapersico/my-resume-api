import { CONTENT_REPOSITORY } from '../../constants';
import { Content } from '../entities/content.entity';

export const contentProviders = [
  {
    provide: CONTENT_REPOSITORY,
    useValue: Content,
  },
];
