import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovieDto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    
    constructor( private movieService: MoviesService) {}

    @Post()
    async create(@Body() dto: CreateMovieDto) {
        return await this.movieService.createMovie(dto);
    }

    @Get('/:kinopoiskId')
    async getByKinopoiskId(@Param('kinopoiskId') kinopoiskId: any  ) {
        return await this.movieService.getMovieByKinopoiskId( kinopoiskId );
    }

    @Get()
    async getAllMovies() {
        return await this.movieService.getAllMovies();
    }
}
