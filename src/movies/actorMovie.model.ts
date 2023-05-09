import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { Person } from "../persons/persons.model";


@Table({tableName: 'actor_film', createdAt: false, updatedAt: false})
export class ActorMovie extends Model<ActorMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    actor_kinopoiskId: number;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_kinopoiskId: number;

    indexes: [
        {
          unique: true,
          fields: ['actor_kinopoiskId', 'movie_kinopoiskId']
        },]
}
