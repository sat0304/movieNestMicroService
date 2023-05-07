import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { Person } from "./persons.model";
import { Profession } from "../professions/professions.model";


@Table({tableName: 'profession_person', createdAt: false, updatedAt: false})
export class ProfessionPerson extends Model<ProfessionPerson> {

    @Column({ type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true })
    id: number;

    @ForeignKey(() => Profession)
    @Column({type: DataType.STRING(64)})
    profession_name: string;
    
    @ForeignKey(() => Person)
    @Column({type: DataType.INTEGER})
    person_kinopoiskId: number;

    indexes: [
        {
          unique: true,
          fields: ['profession_name', 'person_kinopoiskId']
        },]
}
