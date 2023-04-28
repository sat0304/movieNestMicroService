import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { Person } from './persons.model';
import { Movie } from 'src/movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  providers: [PersonsService],
  imports: [SequelizeModule.forFeature([Movie, Person])]
})
export class PersonsModule {}
