import { APPLICATION_REPOSITORY } from 'src/core/constants';
import { Application } from '../entities/application.entity';

export const applicationProviders = [
  {
    provide: APPLICATION_REPOSITORY,
    useValue: Application,
  },
];
