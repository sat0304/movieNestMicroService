import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { CountryMovie } from "../movies/countryMovie.model";


@Table({tableName: 'country', createdAt: false, updatedAt: false})
export class Country extends Model<Country> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    country: string;
    
    @Column({ type: DataType.STRING, allowNull: false })
    countryEng: string;

    @BelongsToMany( () => Movie, () => CountryMovie)
    movies: Movie[];
}
