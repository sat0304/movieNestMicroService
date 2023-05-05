import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovie';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor( private movieService: MoviesService) {}

    @Post()
    create(@Body() dto: CreateMovieDto) {
        // console.log(dto.genreEng, dto.genre);
        return this.movieService.createMovie(dto);
    }

    @Get('/:id')
    getById(@Param('id') id: number  ) {
        return this.movieService.getMovieById( id );
    }

    @Get('/:kinopoiskId')
    getByKinopoiskId(@Param('kinopoiskId') kinopoiskId: number  ) {
        return this.movieService.getMovieByKinopoiskId( kinopoiskId );
    }

    @Get()
    getAll() {
        return this.movieService.getAllMovies();
    }
}
