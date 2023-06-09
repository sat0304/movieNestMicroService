import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { Person } from "../persons/persons.model";


@Table({tableName: 'person_film', createdAt: false, updatedAt: false})
export class PersonMovie extends Model<PersonMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    person_kinopoiskId: number;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_kinopoiskId: number;

    indexes: [
        {
          unique: true,
          fields: ['person_kinopoiskId', 'movie_kinopoiskId']
        },]
}
