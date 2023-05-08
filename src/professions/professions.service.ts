import { Injectable } from '@nestjs/common';
import { Profession } from './professions.model';
import { CreateProfessionDto } from './dto/createProfessionDto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class ProfessionsService {
    constructor(@InjectModel(Profession) private professionRepo: typeof Profession) {}

    async createProfession(dto: CreateProfessionDto) {
        const Profession = await this.professionRepo.create(dto);
        return Profession;
    }

    async getProfessionByName( profession: any ) {
        const professionName = await this.professionRepo.findOne({where: { profession }});
        return professionName;
    }

    async getAllProfessions() {
        const professions = await this.professionRepo.findAll();
        // const Professions = await this.ProfessionRepo.findAll({include: { all: true}});
        return professions;

    }
}
