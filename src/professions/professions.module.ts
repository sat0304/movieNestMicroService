import { Module } from '@nestjs/common';
import { ProfessionsService } from './professions.service';
import { ProfessionsController } from './professions.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Person } from '../persons/persons.model';
import { Profession } from './professions.model';
import { ProfessionPerson } from '../persons/professionPerson.model';

@Module({
  providers: [ProfessionsService],
  controllers: [ProfessionsController],
  imports: [SequelizeModule.forFeature([
    Person, 
    Profession,
    ProfessionPerson])],
  exports: [ProfessionsService],
})
export class ProfessionsModule {}
