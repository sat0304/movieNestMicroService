import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
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

    @Patch(':kinopoiskId')
    async updateActor(
        @Param('kinopoiskId') kinopoiskId: number,
        personKinopoiskIds: number[]) {
      return await this.movieService.updateActorInMovie(
        kinopoiskId, 
        personKinopoiskIds);
    }

    @Patch(':kinopoiskId')
    async updatePerson(
        @Param('kinopoiskId') kinopoiskId: number,
        personKinopoiskIds: number[]) {
      return await this.movieService.updatePersonInMovie(
        kinopoiskId, 
        personKinopoiskIds);
    }

    @Patch(':kinopoiskId')
    async updateCountry(
        @Param('kinopoiskId') kinopoiskId: number,
        countryIds: number[]) {
      return await this.movieService.updateCountryInMovie(
        kinopoiskId, 
        countryIds);
    }

    @Patch(':kinopoiskId')
    async updateGenre(
        @Param('kinopoiskId') kinopoiskId: number,
        genres: string[]) {
      return await this.movieService.updateGenreInMovie(
        kinopoiskId, 
        genres);
    }

    @Patch(':kinopoiskId')
    async updateDetail(
        @Param('kinopoiskId') kinopoiskId: number,
        details: string[]) {
      return await this.movieService.updateDetailInMovie(
        kinopoiskId, 
        details);
    }

    @Patch(':kinopoiskId')
    async updateSimilar(
        @Param('kinopoiskId') kinopoiskId: number,
        kinopoiskIds: number[]) {
      return await this.movieService.updateSimilarMovie(
        kinopoiskId, 
        kinopoiskIds);
    }
}
