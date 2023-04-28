import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { MoviesModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import { GenresModule } from './genres/genres.module';
import { PersonsModule } from './persons/persons.module';
import { ActorsModule } from './actors/actors.module';
import { DubActorsModule } from './dub-actors/dub-actors.module';
import { CountriesModule } from './countries/countries.module';
import { ViewsModule } from './views/views.module';
import { Genre } from './genres/genres.model';
import { Person } from './persons/persons.model';
import { Actor } from './actors/actors.model';
import { DubActor } from './dub-actors/dub-actors.model';
import { Country } from './countries/countries.model';
import { View } from './views/views.model';
import { ActorMovie } from './movies/actorMovie.model';
import { CountryMovie } from './movies/countryMovie.model';
import { DubActorMovie } from './movies/dubActorMovie.model';
import { ViewsMovie } from './movies/viewsMovie.model';
import { Movie } from './movies/movies.model';

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
    models: [Actor, 
             Country, 
             DubActor, 
             Genre,
             Movie,
             Person, 
             View,
             ActorMovie,
             CountryMovie,
             DubActorMovie,
             ViewsMovie],
    autoLoadModels: true,
  }),
    MoviesModule,
    GenresModule,
    PersonsModule,
    ActorsModule,
    DubActorsModule,
    CountriesModule,
    ViewsModule, 
],
  controllers: [],
  providers: [],
})
export class AppModule {}
