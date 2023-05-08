import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person } from './persons.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonMovie } from '../movies/personMovie.model';
import { PersonsController } from './persons.controller';
import { Profession } from '../professions/professions.model';
import { ProfessionPerson } from './professionPerson.model';
import { ProfessionsModule } from '../professions/professions.module';

@Module({
  providers: [PersonsService],
  imports: [ProfessionsModule,
    SequelizeModule.forFeature([
    Movie, 
    Person, 
    PersonMovie,
    Profession,
    ProfessionPerson])],
  controllers: [PersonsController]
})
export class PersonsModule {}
