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

    @Get()
    async getByKinopoiskId( kinopoiskId: number  ) {
        return await this.movieService.getMovieByKinopoiskId( kinopoiskId );
    }

    @Get()
    async getByName( movieName: any ) {
        return await this.movieService.getMovieByName( movieName );
    }

    @Get()
    async getByOriginalName( originalName: any  ) {
        return await this.movieService.getMovieByOriginalName(originalName );
    }

    @Get()
    async getAllMovies() {
        return await this.movieService.getAllMovies();
    }

    @Get()
    async getPersonMovies(personKinopoiskId: number) {
      return await this.movieService.getPersonMovies(personKinopoiskId);
  }
    @Get()
    async getByRate( rateFromRateTo: any ) {
      return await this.movieService.getMoviesByRate( rateFromRateTo );
    }

    @Patch()
    async updateActor(
        kinopoiskId: number,
        personKinopoiskIds: number[]) {
      return await this.movieService.updateActorInMovie(
        kinopoiskId, 
        personKinopoiskIds);
    }

    @Patch()
    async updatePerson(
        kinopoiskId: number,
        personKinopoiskIds: number[]) {
      return await this.movieService.updatePersonInMovie(
        kinopoiskId, 
        personKinopoiskIds);
    }

    @Patch()
    async updateCountry(
        kinopoiskId: number,
        countryIds: number[]) {
      return await this.movieService.updateCountryInMovie(
        kinopoiskId, 
        countryIds);
    }

    @Patch()
    async updateGenre(
        kinopoiskId: number,
        genres: string[]) {
      return await this.movieService.updateGenreInMovie(
        kinopoiskId, 
        genres);
    }

    @Patch()
    async updateDetail(
        kinopoiskId: number,
        details: string[]) {
      return await this.movieService.updateDetailInMovie(
        kinopoiskId, 
        details);
    }

    @Patch()
    async updateSimilar(
        kinopoiskId: number,
        kinopoiskIds: number[]) {
      return await this.movieService.updateSimilarMovie(
        kinopoiskId,
        kinopoiskIds);
    }
}
