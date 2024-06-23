import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Job } from './job.entity';
import { Project } from './project.entity';

@Table({
  tableName: 'position',
  timestamps: false,
})
export class Position extends Model<Position> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  positionId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  title: string;

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

  @ForeignKey(() => Job)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  jobId: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order: number;

  @HasMany(() => Project)
  projects: Project[];
}
