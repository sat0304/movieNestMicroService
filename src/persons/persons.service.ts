import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/createPersonDto';
import { Person } from './persons.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class PersonsService {

    constructor(@InjectModel(Person) private personRepo: typeof Person) {}

    async createPerson(dto: CreatePersonDto) {
        const person = await this.personRepo.create(dto);
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
