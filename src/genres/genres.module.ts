import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './genres.model';
import { Movie } from '../movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { GenresController } from './genres.controller';
import { GenreMovie } from '../movies/genreMovie.model';

@Module({
  controllers: [GenresController],
  providers: [GenresService],
  imports: [SequelizeModule.forFeature([Genre, GenreMovie, Movie])],
  exports: [GenresService]
})
export class GenresModule {}
