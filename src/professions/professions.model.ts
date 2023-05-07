import { BelongsToMany,
    Column,
    DataType,
    Model,
    Table } from "sequelize-typescript";
import { Person } from "../persons/persons.model";
import { ProfessionPerson } from "../persons/professionPerson.model";


@Table({ tableName: 'profession', createdAt: false, updatedAt: false })
export class Profession extends Model<Profession> {

@Column({ type: DataType.STRING(64), 
   unique: true,
   allowNull: false,
   primaryKey: true})
profession: string;

@Column({ type: DataType.STRING(64)})
professionEng: string;

@BelongsToMany( () => Person, () => ProfessionPerson)
persons: Person[];
}
