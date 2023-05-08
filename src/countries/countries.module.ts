import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Country } from './countries.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CountryMovie } from '../movies/countryMovie.model';
import { CountriesController } from './countries.controller';

@Module({
  providers: [CountriesService],
  imports: [SequelizeModule.forFeature([Country, Movie, CountryMovie])],
  controllers: [CountriesController]
})
export class CountriesModule {}
