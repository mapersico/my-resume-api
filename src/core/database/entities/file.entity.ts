import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'file',
  timestamps: false,
})
export class File extends Model<File> {
  @Column({
    type: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  fileId: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  file: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  lang: string;
}
