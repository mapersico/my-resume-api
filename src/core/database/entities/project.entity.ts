import {
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Position } from './position.entity';
import { SkillsPerProject } from './skillsPerProject.entity';

@Table({
  tableName: 'project',
  timestamps: false,
})
export class Project extends Model<Project> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  projectId: string;

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

  @ForeignKey(() => Position)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  positionId: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order: number;

  @HasMany(() => SkillsPerProject)
  technologies: SkillsPerProject[];
}
