import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";
import { ViewsMovie } from "../movies/viewsMovie.model";


@Table({tableName: 'views', createdAt: false, updatedAt: false})
export class View extends Model<View> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    countryName: string;
    
    @Column({ type: DataType.INTEGER, allowNull: false, defaultValue: 1 })
    numViews: number;

    @BelongsToMany( () => Movie, () => ViewsMovie)
    movies: Movie[];
}
