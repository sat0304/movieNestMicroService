import { BelongsToMany, Column, DataType, Model, Table } from "sequelize-typescript";
import { DetailMovie } from "../movies/detailsMovie.model";
import { Movie } from "../movies/movies.model";


@Table({tableName: 'detail', createdAt: false, updatedAt: false})
export class Detail extends Model<Detail> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING})
    nameEng: string;
    
    @Column({ type: DataType.STRING})
    value: string;

    @BelongsToMany( () => Movie, () => DetailMovie)
    movies: Movie[];

    indexes: [
        {
          unique: true,
          fields: ['name', 'value']
        },]
}
