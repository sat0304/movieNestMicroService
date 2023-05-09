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
import { ActorMovie } from "./actorMovie.model";


@Table({tableName: 'film', createdAt: false, updatedAt: false})
export class Movie extends Model<Movie> {

    @Column({ type: DataType.INTEGER,
              allowNull: false,
              unique: true,
              primaryKey: true })
    kinopoiskId: number;  

    @Column({ type: DataType.STRING(255), allowNull: false })
    name: string;

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

    // @ForeignKey(() => Person)
    // @Column({type: DataType.INTEGER})
    // actor_kinopoiskId: number;

    @BelongsToMany( () => Person, () => ActorMovie)
    actors: Person[];

    // @ForeignKey(() => Genre)
    // @Column({type: DataType.STRING})
    // genre_nameEng: string;

    @BelongsToMany( () => Genre, () => GenreMovie)
    genres: Genre[];

    // @ForeignKey(() => Country)
    // @Column({type: DataType.INTEGER})
    // country_id: number;

    @BelongsToMany( () => Country, () => CountryMovie)
    countries: Country[];

    // @ForeignKey(() => Detail)
    // @Column({type: DataType.INTEGER})
    // detail_id: number; 

    @BelongsToMany( () => Detail, () => DetailMovie)
    details: Detail[];

    // @ForeignKey(() => Person)
    // @Column({type: DataType.INTEGER})
    // person_kinopoiskId: number;

    @BelongsToMany( () => Person, () => PersonMovie)
    persons: Person[];

    // @ForeignKey(() => Movie)
    // @Column({type: DataType.INTEGER})
    // movie_kinopoiskId: number;

    @BelongsToMany( () => Movie, () => MovieMovie)
    similarFilms: Movie[] 
}
