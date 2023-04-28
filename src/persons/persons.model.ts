import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";


@Table({tableName: 'person', createdAt: false, updatedAt: false})
export class Person extends Model<Person> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    firstName: string;
    
    @Column({ type: DataType.STRING, allowNull: false })
    secondName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    enName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    occupation: string;

    @Column({ type: DataType.STRING, allowNull: false })
    birthDate: string;

    @Column({ type: DataType.STRING })
    deathDate: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    age: number;

    @Column({ type: DataType.STRING })
    photo: string;

    @HasMany(() => Movie)
    movies: Movie[];
}
