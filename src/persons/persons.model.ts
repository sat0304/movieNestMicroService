import { 
    BelongsToMany, 
    Column, DataType, 
    ForeignKey, 
    Model, 
    Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { PersonMovie } from "../movies/personMovie.model";
import { Profession } from "../professions/professions.model";
import { ProfessionPerson } from "./professionPerson.model";


@Table({tableName: 'person', createdAt: false, updatedAt: false})
export class Person extends Model<Person> {

    @Column({ type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true })
    personKinopoiskId: number;

    @Column({ type: DataType.STRING(255)})
    name: string;
    
    @Column({ type: DataType.STRING(255)})
    nameEng: string;

    @BelongsToMany( () => Profession, () => ProfessionPerson)
    professions: Profession[];

    @Column({ type: DataType.STRING(255)})
    link: string;

    @BelongsToMany( () => Movie, () => PersonMovie)
    movies: Movie[];
}
