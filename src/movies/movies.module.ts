import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies.model';
import { Detail } from '../details/details.model';
import { Country } from '../countries/countries.model';
import { Person } from '../persons/persons.model';
import { Genre } from '../genres/genres.model';
import { DetailMovie } from './detailsMovie.model';
import { CountryMovie } from './countryMovie.model';
import { GenreMovie } from './genreMovie.model';
import { PersonMovie } from './personMovie.model';
import { MovieMovie } from './movieMovie.model';

@Module({
  controllers: [],
  providers: [MoviesService],
  imports: [SequelizeModule.forFeature(
    [ Country,
      Genre,
      Detail,
      Movie,
      Person,
      CountryMovie,
      DetailMovie,
      GenreMovie,
      MovieMovie,
      PersonMovie]
    )]
})
export class MoviesModule {}
