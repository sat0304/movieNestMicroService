import { BelongsToMany, 
         Column, 
         DataType, 
         Model, 
         Table } from "sequelize-typescript";
import { ActorMovie } from "../movies/actorMovie.model";
import { Movie } from "../movies/movies.model";


@Table({tableName: 'actor', createdAt: false, updatedAt: false})
export class Actor extends Model<Actor> {

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

    @Column({ type: DataType.STRING})
    biography: string;

    @Column({ type: DataType.STRING, allowNull: false })
    birthDate: string;

    @Column({ type: DataType.STRING })
    deathDate: string;

    @Column({ type: DataType.INTEGER, allowNull: false })
    age: number;

    @Column({ type: DataType.STRING })
    photo: string;

    @BelongsToMany( () => Movie, () => ActorMovie)
    movies: Movie[];
}
