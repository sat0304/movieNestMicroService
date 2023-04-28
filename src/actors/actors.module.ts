import { Module } from '@nestjs/common';
import { ActorsService } from './actors.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from '../movies/movies.model';
import { Actor } from './actors.model';
import { ActorMovie } from '../movies/actorMovie.model';

@Module({
  providers: [ActorsService],
  imports: [SequelizeModule.forFeature([Movie, Actor, ActorMovie])]
})
export class ActorsModule {}
