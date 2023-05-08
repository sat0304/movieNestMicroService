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

    async createPerson(dto: CreatePersonDto) {
        const person = await this.personRepo.create(dto);
        let name = '%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80';
        const profession = await this.professionService.getProfessionByName(name);
        await person.$set('professions', [profession.profession])
        return person;
    }

    async getPersonByKinopoiskId( kinopoiskId: any ) {
        const person = await this.personRepo.findOne({where: { kinopoiskId }});
        return person;
    }

    async getAllPersons() {
        // const persons = await this.personRepo.findAll();
        const persons = await this.personRepo.findAll({include: { all: true}});
        return persons;
    }

}
