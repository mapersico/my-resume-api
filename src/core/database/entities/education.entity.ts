import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Profile } from './profile.entity';

@Table({
  tableName: 'education',
  timestamps: false,
})
export class Education extends Model<Education> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  educationId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  fromTo: string;

  @ForeignKey(() => Profile)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  profileId: string;
}
