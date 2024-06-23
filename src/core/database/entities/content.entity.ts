import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'content',
  timestamps: false,
})
export class Content extends Model<Content> {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  contentId: string;

  @Column({
    type: DataType.JSON,
    allowNull: false,
  })
  data: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  key: string;
}
