import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './movies.model';
import { Actor } from '../actors/actors.model';
import { View } from '../views/views.model';
import { DubActor } from '../dub-actors/dub-actors.model';
import { Country } from '../countries/countries.model';
import { Person } from '../persons/persons.model';
import { Genre } from '../genres/genres.model';
import { ViewsMovie } from './viewsMovie.model';
import { DubActorMovie } from './dubActorMovie.model';
import { CountryMovie } from './countryMovie.model';
import { ActorMovie } from './actorMovie.model';

@Module({
  controllers: [],
  providers: [MoviesService],
  imports: [SequelizeModule.forFeature(
    [ Actor,
      Country,
      Genre,
      DubActor,
      Movie,
      Person,
      View,
      ActorMovie,
      CountryMovie,
      DubActorMovie,
      ViewsMovie]
    )]
})
export class MoviesModule {}
