import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { PersonMovie } from "../movies/personMovie.model";


@Table({tableName: 'person', createdAt: false, updatedAt: false})
export class Person extends Model<Person> {

    @Column({ type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        unique: true })
    kinopoiskId: number;

    @Column({ type: DataType.STRING(255)})
    name: string;
    
    @Column({ type: DataType.STRING(255)})
    nameEng: string;

    @Column({ type: DataType.STRING(64), allowNull: false })
    occupationFirst: string;

    @Column({ type: DataType.STRING(64)})
    occupationFirstEng: string;

    @Column({ type: DataType.STRING(64)})
    occupationSecond: string;

    @Column({ type: DataType.STRING(64)})
    occupationSecondEng: string;

    @Column({ type: DataType.STRING(1024) })
    link: string;

    @BelongsToMany( () => Movie, () => PersonMovie)
    movies: Movie[];
}
