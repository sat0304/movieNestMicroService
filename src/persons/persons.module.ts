import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person } from './persons.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PersonMovie } from '../movies/personMovie.model';
import { PersonsController } from './persons.controller';

@Module({
  providers: [PersonsService],
  imports: [SequelizeModule.forFeature([Movie, Person, PersonMovie])],
  controllers: [PersonsController]
})
export class PersonsModule {}
