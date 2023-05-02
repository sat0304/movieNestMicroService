import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { PersonMovie } from "../movies/personMovie.model";


@Table({tableName: 'person', createdAt: false, updatedAt: false})
export class Person extends Model<Person> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING})
    name: string;
    
    @Column({ type: DataType.STRING})
    nameEng: string;

    @Column({ type: DataType.STRING, allowNull: false })
    occupation: string;

    @Column({ type: DataType.STRING})
    occupationEng: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    kinopoiskId: number;

    @Column({ type: DataType.STRING })
    link: string;

    @BelongsToMany( () => Movie, () => PersonMovie)
    movies: Movie[];
}
