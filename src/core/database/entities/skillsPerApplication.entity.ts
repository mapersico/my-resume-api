import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';

import { Skill } from './skill.entity';
import { Application } from './application.entity';

@Table({
  tableName: 'skillsPerApplication',
  timestamps: false,
})
export class SkillsPerApplication extends Model<SkillsPerApplication> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  skillsPerApplicationId: string;

  @ForeignKey(() => Skill)
  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  skillId: string;

  @ForeignKey(() => Application)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  applicationId: string;

  @BelongsTo(() => Skill)
  skill: Skill;
}
