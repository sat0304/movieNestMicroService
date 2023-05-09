import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { Detail } from "../details/details.model";


@Table({tableName: 'detail_film', createdAt: false, updatedAt: false})
export class DetailMovie extends Model<DetailMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Detail)
    @Column({type: DataType.STRING})
    detailName: string;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_kinopoiskId: number;

    indexes: [
        {
          unique: true,
          fields: ['detailName', 'movie_kinopoiskId']
        },]
}