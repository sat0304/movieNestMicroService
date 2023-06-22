import {BelongsToMany,
        Column, 
        DataType,
        HasMany,
        Model, 
        Table } from "sequelize-typescript";
import { Country } from "../countries/countries.model";
import { Genre } from "../genres/genres.model";
import { Person } from "../persons/persons.model";
import { Detail } from "../details/details.model";
import { CountryMovie } from "./countryMovie.model";
import { GenreMovie } from "./genreMovie.model";
import { PersonMovie } from "./personMovie.model";
import { MovieMovie } from "./movieMovie.model";
import { ActorMovie } from "./actorMovie.model";
import { Similar } from "../similars/similars.model";


@Table({tableName: 'film', createdAt: false, updatedAt: false})
export class Movie extends Model<Movie> {

    @Column({ type: DataType.INTEGER,
              allowNull: false,
              unique: true,
              primaryKey: true })
    kinopoiskId: number;  

    @Column({ type: DataType.STRING(255), allowNull: false })
    movieName: string;

    @Column({ type: DataType.STRING(255)})
    originalName: string;

    @Column({ type: DataType.STRING(1024)})
    description: string;

    @Column({ type: DataType.STRING(1024)})
    poster: string;
    
    @Column({ type: DataType.STRING(1024)})
    trailerLink: string;

    @Column({ type: DataType.INTEGER })
    year: number;

    @Column({ type: DataType.STRING(64)})
    movieLength: string;

    @Column({ type: DataType.STRING(16)})
    ageRating: string;

    @Column({ type: DataType.STRING(16)})
    rate: string;

    @BelongsToMany( () => Person, () => ActorMovie)
    actors: Person[];

    @BelongsToMany( () => Genre, () => GenreMovie)
    genres: Genre[];

    @BelongsToMany( () => Country, () => CountryMovie)
    countries: Country[];

    @HasMany(() => Detail)
    details: Detail[];

    @BelongsToMany( () => Person, () => PersonMovie)
    persons: Person[];

    @BelongsToMany( () => Similar, () => MovieMovie)
    similarFilms: Movie[] 
}
