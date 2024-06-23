import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'skill',
  timestamps: false,
})
export class Skill extends Model<Skill> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  skillId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  percent: number;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  icon: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  color: string;
}
