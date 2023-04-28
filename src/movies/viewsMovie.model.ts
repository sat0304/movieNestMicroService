import { Column, 
         DataType, 
         ForeignKey, 
         Model, 
         Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { View } from "src/views/views.model";


@Table({tableName: 'views_film', createdAt: false, updatedAt: false})
export class ViewsMovie extends Model<ViewsMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => View)
    @Column({type: DataType.INTEGER})
    views_id: number;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_id: number;
}
