import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { Genre } from './genres.model';
import { Movie } from 'src/movies/movies.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [],
  providers: [GenresService],
  imports: [SequelizeModule.forFeature([Genre, Movie])]
})
export class GenresModule {}
