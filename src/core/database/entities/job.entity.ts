import { Column, DataType, Table, HasMany, Model } from 'sequelize-typescript';

import { Position } from './position.entity';

@Table({
  tableName: 'job',
  timestamps: false,
})
export class Job extends Model<Job> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  jobId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  title: string;

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

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  brandColor: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  lang: string;

  @HasMany(() => Position)
  positions: Position[];
}
