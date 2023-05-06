import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";



@Table({tableName: 'film_film', createdAt: false, updatedAt: false})
export class MovieMovie extends Model<MovieMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_kinopoiskId: number;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    similarMovie_kinopoiskId: number;

    indexes: [
        {
          unique: true,
          fields: ['similarMovie_kinopoiskId', 'movie_kinopoiskId']
        },]
}