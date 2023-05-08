import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { Detail } from './details.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { DetailMovie } from '../movies/detailsMovie.model';
import { DetailsController } from './details.controller';

@Module({
  providers: [DetailsService],
  imports: [SequelizeModule.forFeature([Movie, Detail, DetailMovie])],
  controllers: [DetailsController]
})
export class DetailsModule {}
