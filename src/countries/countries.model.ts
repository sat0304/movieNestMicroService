import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { CountryMovie } from "../movies/countryMovie.model";


@Table({tableName: 'country', createdAt: false, updatedAt: false})
export class Country extends Model<Country> {
    
    @Column({ type: DataType.STRING(255),
        unique: true,
        primaryKey: true})
    countryEng: string;

    @Column({ type: DataType.STRING(255)})
    country: string;

    @BelongsToMany( () => Movie, () => CountryMovie)
    movies: Movie[];
}
