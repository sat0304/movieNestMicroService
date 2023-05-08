import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { CountryMovie } from "../movies/countryMovie.model";


@Table({tableName: 'country', createdAt: false, updatedAt: false})
export class Country extends Model<Country> {
    
    @Column({ type: DataType.INTEGER,
        unique: true,
        primaryKey: true})
    countryId: number;

    @Column({ type: DataType.STRING(255)})
    country: string;

    @Column({ type: DataType.STRING(255)})
    countryEng: string;

    @BelongsToMany( () => Movie, () => CountryMovie)
    movies: Movie[];
}
