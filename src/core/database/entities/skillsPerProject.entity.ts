import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Skill } from './skill.entity';
import { Project } from './project.entity';

@Table({
  tableName: 'skillsPerProject',
  timestamps: false,
})
export class SkillsPerProject extends Model<SkillsPerProject> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  skillsPerProjectId: string;

  @ForeignKey(() => Skill)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  skillId: string;

  @ForeignKey(() => Project)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  projectId: string;

  @BelongsTo(() => Skill)
  skill: Skill;
}
