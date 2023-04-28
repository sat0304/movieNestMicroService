import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { DubActorMovie } from "../movies/dubActorMovie.model";
import { Movie } from "../movies/movies.model";


@Table({tableName: 'dubbing_actor', createdAt: false, updatedAt: false})
export class DubActor extends Model<DubActor> {

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
    birthDate: string;

    @Column({ type: DataType.STRING })
    deathDate: string;

    @Column({ type: DataType.STRING})
    biography: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    age: number;

    @Column({ type: DataType.STRING })
    photo: string;

    @BelongsToMany( () => Movie, () => DubActorMovie)
    movies: Movie[];
}
