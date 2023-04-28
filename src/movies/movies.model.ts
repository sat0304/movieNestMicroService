import { BelongsTo, 
        BelongsToMany,
        Column, 
        DataType, 
        ForeignKey, 
        Model, 
        Table } from "sequelize-typescript";
import { Country } from "../countries/countries.model";
import { Genre } from "../genres/genres.model";
import { Person } from "../persons/persons.model";
import { Actor } from "../actors/actors.model";
import { DubActor } from "../dub-actors/dub-actors.model";
import { View } from "../views/views.model";
import { ActorMovie } from "./actorMovie.model";
import { ViewsMovie } from "./viewsMovie.model";
import { CountryMovie } from "./countryMovie.model";
import { DubActorMovie } from "./dubActorMovie.model";


@Table({tableName: 'film', createdAt: false, updatedAt: false})
export class Movie extends Model<Movie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    movieName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    enName: string;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
    duration: number;

    @Column({ type: DataType.STRING})
    poster: string;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1895 })
    releaseYear: number;

    @ForeignKey(() => Country)
    @Column({type: DataType.INTEGER})
    country_id: number;

    @BelongsTo(() => Country)
    country: Country;

    @ForeignKey(() => Genre)
    @Column({type: DataType.INTEGER})
    genre_id: number;

    @BelongsTo(() => Genre)
    genre: Genre;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    director_id: number;

    @BelongsTo(() => Person)
    director: Person;
    
    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    writer_id: number;

    @BelongsTo(() => Person)
    writer: Person;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    music_id: number;

    @BelongsTo(() => Person)
    music: Person;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    producer_id: number;

    @BelongsTo(() => Person)
    producer: Person;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
    budget: number;

    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
    rating: number;

    @BelongsToMany( () => Actor, () => ActorMovie)
    actors: Actor[];

    @BelongsToMany( () => DubActor, () => DubActorMovie)
    dubActors: DubActor[];

    @BelongsToMany( () => View, () => ViewsMovie)
    views: View[];

    @BelongsToMany( () => Country, () => CountryMovie)
    countries: Country[];
}
