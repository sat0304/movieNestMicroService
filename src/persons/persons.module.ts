import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person } from './persons.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonMovie } from '../movies/personMovie.model';

@Module({
  providers: [PersonsService],
  imports: [SequelizeModule.forFeature([Movie, Person, PersonMovie])]
})
export class PersonsModule {}
