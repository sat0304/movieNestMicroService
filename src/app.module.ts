import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { GenresModule } from './genres/genres.module';
import { PersonsModule } from './persons/persons.module';
import { DetailsModule } from './details/details.module';
import { CountriesModule } from './countries/countries.module';
import { Genre } from './genres/genres.model';
import { Person } from './persons/persons.model';
import { Detail } from './details/details.model';
import { Country } from './countries/countries.model';
import { CountryMovie } from './movies/countryMovie.model';
import { DetailMovie } from './movies/detailsMovie.model';
import { Movie } from './movies/movies.model';
import { GenreMovie } from './movies/genreMovie.model';
import { PersonMovie } from './movies/personMovie.model';
import { MovieMovie } from './movies/movieMovie.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    models: [Country, 
             Detail, 
             Genre,
             Movie,
             Person,
             CountryMovie,
             DetailMovie,
             GenreMovie,
             MovieMovie,
             PersonMovie,
            ],
    autoLoadModels: true,
  }),
    MoviesModule,
    GenresModule,
    PersonsModule,
    DetailsModule,
    CountriesModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
