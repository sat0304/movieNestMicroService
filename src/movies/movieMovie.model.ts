import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { Similar } from "../similars/similars.model";



@Table({tableName: 'film_film', createdAt: false, updatedAt: false})
export class MovieMovie extends Model<MovieMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Similar)
    @Column({type: DataType.INTEGER})
    similarFilm_kinopoiskId: number;

    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    film_kinopoiskId: number;

    indexes: [
        {
          unique: true,
          fields: ['similarFilm_kinopoiskId', 'film_kinopoiskId']
        },]
}