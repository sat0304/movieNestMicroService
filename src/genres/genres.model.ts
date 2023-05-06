import { BelongsToMany,
         Column,
         DataType,
         Model,
         Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { GenreMovie } from "../movies/genreMovie.model";


@Table({ tableName: 'genre', createdAt: false, updatedAt: false })
export class Genre extends Model<Genre> {

    @Column({ type: DataType.STRING(64), 
        unique: true,
        primaryKey: true})
    genreEng: string;

    @Column({ type: DataType.STRING(64), allowNull: false })
    genre: string;

    @BelongsToMany( () => Movie, () => GenreMovie)
    movies: Movie[];
}
