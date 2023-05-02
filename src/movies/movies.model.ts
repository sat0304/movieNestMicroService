import {BelongsToMany,
        Column, 
        DataType, 
        ForeignKey, 
        Model, 
        Table } from "sequelize-typescript";
import { Country } from "../countries/countries.model";
import { Genre } from "../genres/genres.model";
import { Person } from "../persons/persons.model";
import { Detail } from "../details/details.model";
import { CountryMovie } from "./countryMovie.model";
import { DetailMovie } from "./detailsMovie.model";
import { GenreMovie } from "./genreMovie.model";
import { PersonMovie } from "./personMovie.model";
import { MovieMovie } from "./movieMovie.model";


@Table({tableName: 'film', createdAt: false, updatedAt: false})
export class Movie extends Model<Movie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING})
    originalName: string;

    @Column({ type: DataType.STRING})
    description: string;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    actor_id: number;

    @BelongsToMany( () => Person, () => PersonMovie)
    actors: Person[];

    @Column({ type: DataType.STRING})
    poster: string;
    
    @Column({ type: DataType.STRING})
    trailerLink: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1895})
    year: number;

    @Column({ type: DataType.STRING})
    movieLength: string;

    @Column({ type: DataType.STRING})
    ageRating: string;

    @ForeignKey(() => Genre)
    @Column({type: DataType.INTEGER})
    genre_id: number;

    @BelongsToMany( () => Genre, () => GenreMovie)
    genres: Genre[];

    @ForeignKey(() => Country)
    @Column({type: DataType.INTEGER})
    country_id: number;

    @BelongsToMany( () => Country, () => CountryMovie)
    countries: Country[];

    @Column({ type: DataType.STRING})
    rate: string;

    @ForeignKey(() => Detail)
    @Column({type: DataType.INTEGER})
    detail_id: number; 

    @BelongsToMany( () => Detail, () => DetailMovie)
    details: Detail[];

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    person_id: number;

    @BelongsToMany( () => Person, () => PersonMovie)
    persons: Person[];

    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_id: number;

    @BelongsToMany( () => Movie, () => MovieMovie)
    simularFilms: Movie[]

    @Column({ type: DataType.INTEGER, allowNull: false })
    kinopoiskId: number;   
}
