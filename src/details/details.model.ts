import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "../movies/movies.model";


@Table({tableName: 'detail', createdAt: false, updatedAt: false})
export class Detail extends Model<Detail> {

    
    @Column({type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true })
    id: number;
    
    @Column({type: DataType.STRING})
    name: string;

    @Column({ type: DataType.STRING })
    nameEng: string;
    
    @Column({ type: DataType.STRING })
    value: string;

    @BelongsTo(() => Movie)
    movie: Movie;

    @ForeignKey(() => Movie)
    @Column({ type: DataType.INTEGER })
    movieId: number;

}
