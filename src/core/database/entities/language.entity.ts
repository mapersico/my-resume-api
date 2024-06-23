import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Profile } from './profile.entity';

@Table({
  tableName: 'language',
  timestamps: false,
})
export class Language extends Model<Language> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  languageId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  level: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  percent: string;

  @ForeignKey(() => Profile)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  profileId: string;
}
