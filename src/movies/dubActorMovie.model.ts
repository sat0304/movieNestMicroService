import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { DubActor } from "../dub-actors/dub-actors.model";


@Table({tableName: 'dubbing_actor_film', createdAt: false, updatedAt: false})
export class DubActorMovie extends Model<DubActorMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => DubActor)
    @Column({type: DataType.INTEGER})
    dubActor_id: number;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_id: number;
}