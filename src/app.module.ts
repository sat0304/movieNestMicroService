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
import { Movie } from './movies/movies.model';
import { GenreMovie } from './movies/genreMovie.model';
import { PersonMovie } from './movies/personMovie.model';
import { MovieMovie } from './movies/movieMovie.model';
import { ProfessionsModule } from './professions/professions.module';
import { Profession } from './professions/professions.model';
import { ProfessionPerson } from './persons/professionPerson.model';
import { ActorMovie } from './movies/actorMovie.model';
import { SimilarsModule } from './similars/similars.module';
import { Similar } from './similars/similars.model';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env'
    }),
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT),
    models: [Country, 
             Detail, 
             Genre,
             Movie,
             Similar,
             Person,
             Profession,
             ActorMovie,
             CountryMovie,
             GenreMovie,
             MovieMovie,
             PersonMovie,
             ProfessionPerson
            ],
    autoLoadModels: true,
  }),
    MoviesModule,
    GenresModule,
    PersonsModule,
    DetailsModule,
    CountriesModule,
    ProfessionsModule,
    SimilarsModule,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
