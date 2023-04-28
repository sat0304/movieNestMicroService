import { Column, 
         DataType, 
         HasMany, 
         Model, 
         Table } from "sequelize-typescript";
import { Movie } from "src/movies/movies.model";


@Table({ tableName: 'genre', createdAt: false, updatedAt: false })
export class Genre extends Model<Genre> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    enName: string;

    @Column({ type: DataType.STRING, allowNull: false })
    description: string;

    @HasMany( () => Movie )
    movies: Movie[];
}
