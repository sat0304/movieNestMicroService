import {BelongsToMany,
    Column, 
    DataType,
    Model, 
    Table } from "sequelize-typescript";

import { MovieMovie } from "../movies/movieMovie.model";
import { Movie } from "../movies/movies.model";



@Table({tableName: 'similar', createdAt: false, updatedAt: false})
export class Similar extends Model<Similar> {

@Column({ type: DataType.INTEGER,
          allowNull: false,
          unique: true,
          primaryKey: true })
similarKinopoiskId: number; 

@Column({ type: DataType.STRING(255), allowNull: false })
movieName: string;

@Column({ type: DataType.STRING(255)})
nameEng: string;

@Column({ type: DataType.STRING(1024)})
url: string;

@BelongsToMany( () => Movie, () => MovieMovie)
similarFilms: Movie[] 
}
