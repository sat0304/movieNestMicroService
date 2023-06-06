import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/createPersonDto';
import { Person } from './persons.model';
import { InjectModel } from '@nestjs/sequelize';
import { ProfessionsService } from '../professions/professions.service';
import { Profession } from '../professions/professions.model';
import { Op } from 'sequelize';

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
        const persons = await this.personRepo.findAll();
        return persons;
    }

    async getAllActors() {
        // const persons = await this.personRepo.findAll();
        // const occupation = await this.professionService.getProfessionByName('Актер');
        const persons = await this.personRepo.findAll({
            include: { 
                model: Profession, 
                as: 'professions',
                where: {
                    profession: {
                    [Op.eq]: 'Актер'
                    }
                }
            }
        });
        return persons;
    }
}
