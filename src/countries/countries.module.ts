import { Module } from '@nestjs/common';
import { CountriesService } from './countries.service';
import { Country } from './countries.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CountryMovie } from '../movies/countryMovie.model';

@Module({
  providers: [CountriesService],
  imports: [SequelizeModule.forFeature([Country, Movie, CountryMovie])]
})
export class CountriesModule {}
