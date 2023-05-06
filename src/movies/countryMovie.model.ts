import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Movie } from "./movies.model";
import { Country } from "../countries/countries.model";


@Table({tableName: 'country_film', createdAt: false, updatedAt: false})
export class CountryMovie extends Model<CountryMovie> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Country)
    @Column({type: DataType.STRING})
    country_nameEng: string;
    
    @ForeignKey(() => Movie)
    @Column({type: DataType.INTEGER})
    movie_kinopoiskId: number;

    indexes: [
        {
          unique: true,
          fields: ['country_nameEng', 'movie_kinopoiskId']
        },]
}