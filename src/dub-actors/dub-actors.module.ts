import { Module } from '@nestjs/common';
import { DubActorsService } from './dub-actors.service';
import { DubActor } from './dub-actors.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { DubActorMovie } from '../movies/dubActorMovie.model';

@Module({
  providers: [DubActorsService],
  imports: [SequelizeModule.forFeature([Movie, DubActor, DubActorMovie])]
})
export class DubActorsModule {}
