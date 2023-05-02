import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { Genre } from "../genres/genres.model";


@Table({tableName: 'genre_film', createdAt: false, updatedAt: false})
export class GenreMovie extends Model<GenreMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Genre)
    @Column({type: DataType.INTEGER})
    genre_id: number;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_id: number;
}
