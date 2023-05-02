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
    movie_id: number;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    similarMovie_id: number;
}