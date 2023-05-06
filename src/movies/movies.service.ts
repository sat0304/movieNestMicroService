import { Injectable } from '@nestjs/common';
import { Movie } from './movies.model';
import { CreateMovieDto } from './dto/createMovieDto';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MoviesService {

    constructor(@InjectModel(Movie) private movieRepo: typeof Movie) {}

    async createMovie(dto: CreateMovieDto) {
        const movie = await this.movieRepo.create(dto);
        return movie;
    }

    async getMovieByKinopoiskId( kinopoiskId: any ) {
        const movie = await this.movieRepo.findOne({where: { kinopoiskId }});
        return movie;
    }

    async getAllMovies() {
        // const movies = await this.movieRepo.findAll();
        const movies = await this.movieRepo.findAll({include: { all: true}});
        return movies;
    }
}
