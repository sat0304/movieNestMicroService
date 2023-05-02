import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { Detail } from './details.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { DetailMovie } from '../movies/detailsMovie.model';

@Module({
  providers: [DetailsService],
  imports: [SequelizeModule.forFeature([Movie, Detail, DetailMovie])]
})
export class DetailsModule {}
