import { Column, DataType, Model, Table } from "sequelize-typescript";


@Table({tableName: 'genre'})
export class Genre extends Model<Genre> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    enName: string;

    @Column({ type: DataType.STRING })
    description: string;
}
