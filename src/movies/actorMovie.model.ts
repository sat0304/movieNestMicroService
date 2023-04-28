import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { Actor } from "../actors/actors.model";


@Table({tableName: 'actor_film', createdAt: false, updatedAt: false})
export class ActorMovie extends Model<ActorMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Actor)
    @Column({type: DataType.INTEGER})
    actor_id: number;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_id: number;
}
