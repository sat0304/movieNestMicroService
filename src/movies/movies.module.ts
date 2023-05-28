import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies.model';
import { Detail } from '../details/details.model';
import { Country } from '../countries/countries.model';
import { Person } from '../persons/persons.model';
import { Genre } from '../genres/genres.model';
import { CountryMovie } from './countryMovie.model';
import { GenreMovie } from './genreMovie.model';
import { PersonMovie } from './personMovie.model';
import { MovieMovie } from './movieMovie.model';
import { MoviesController } from './movies.controller';
import { PersonsModule } from '../persons/persons.module';
import { CountriesModule } from '../countries/countries.module';
import { DetailsModule } from '../details/details.module';
import { GenresModule } from '../genres/genres.module';
import { ActorMovie } from './actorMovie.model';
import { Similar } from '../similars/similars.model';
import { SimilarsModule } from '../similars/similars.module';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService],
  imports: [
    CountriesModule,
    DetailsModule,
    GenresModule,
    SimilarsModule,
    PersonsModule,
    SequelizeModule.forFeature(
    [ Country,
      Genre,
      Detail,
      Movie,
      Similar,
      Person,
      ActorMovie,
      CountryMovie,
      GenreMovie,
      MovieMovie,
      PersonMovie]
    )]
})
export class MoviesModule {}
