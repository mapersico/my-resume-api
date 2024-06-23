import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import { SEQUELIZE } from '../constants';
import { databaseConfig } from './database.config';
import { IDatabaseConfigAttributes } from './interfaces/dbConfig.interface';
import {
  Application,
  Contact,
  Content,
  Education,
  File,
  Job,
  Language,
  Link,
  Position,
  Profile,
  Project,
  Skill,
  SkillsPerApplication,
  SkillsPerProject,
} from './entities';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      const config: IDatabaseConfigAttributes = databaseConfig.databaseConfig;
      const sequelize = new Sequelize(config as SequelizeOptions);
      sequelize.addModels([
        Content,
        Contact,
        Skill,
        Job,
        Position,
        Project,
        SkillsPerProject,
        Profile,
        Education,
        Language,
        Application,
        SkillsPerApplication,
        Link,
        File,
      ]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
