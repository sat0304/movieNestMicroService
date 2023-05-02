import { BelongsToMany,
         Column,
         DataType,
         Model,
         Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { GenreMovie } from "../movies/genreMovie.model";


@Table({ tableName: 'genre', createdAt: false, updatedAt: false })
export class Genre extends Model<Genre> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    genre: string;

    @Column({ type: DataType.STRING})
    genreEng: string;

    @BelongsToMany( () => Movie, () => GenreMovie)
    movies: Movie[];
}
