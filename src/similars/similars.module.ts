import { Module } from '@nestjs/common';
import { SimilarsService } from './similars.service';
import { SimilarsController } from './similars.controller';
import { Similar } from './similars.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from '../movies/movies.model';
import { MovieMovie } from '../movies/movieMovie.model';

@Module({
  providers: [SimilarsService],
  controllers: [SimilarsController],
  imports: [SequelizeModule.forFeature([Movie, Similar, MovieMovie])],
  exports: [SimilarsService]

})
export class SimilarsModule {}
