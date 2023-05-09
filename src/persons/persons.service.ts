import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/createPersonDto';
import { Person } from './persons.model';
import { InjectModel } from '@nestjs/sequelize';
import { ProfessionsService } from '../professions/professions.service';

@Injectable()
export class PersonsService {

    constructor(@InjectModel(Person) 
        private personRepo: typeof Person,
        private professionService: ProfessionsService) {}

    async createPerson(dto: CreatePersonDto, nameProfession: string) {
        const person = await this.personRepo.create(dto);
        const profession = await this.professionService.getProfessionByName(nameProfession);
        await person.$set('professions', [profession.profession])
        return person;
    }

    async getPersonByKinopoiskId( personKinopoiskId: number ) {
        const person = await this.personRepo.findOne({where: { personKinopoiskId }});
        return person;
    }

    async getAllPersons() {
        // const persons = await this.personRepo.findAll();
        const persons = await this.personRepo.findAll({include: { all: true}});
        return persons;
    }

}
