import { Injectable } from '@nestjs/common';
import { Movie } from './movies.model';
import { CreateMovieDto } from './dto/createMovieDto';
import { InjectModel } from '@nestjs/sequelize';
import { PersonsService } from '../persons/persons.service';
import { CountriesService } from '../countries/countries.service';
import { GenresService } from '../genres/genres.service';
import { DetailsService } from '../details/details.service';
import { SimilarsService } from '../similars/similars.service';

@Injectable()
export class MoviesService {

    constructor(
        @InjectModel(Movie) private movieRepo: typeof Movie,
        private personService: PersonsService,
        private countryService: CountriesService,
        private genreService: GenresService,
        private detailService: DetailsService,
        private similarService: SimilarsService,) {}

    async createMovie( dto: CreateMovieDto ) {
        const movie = await this.movieRepo.create(dto);
        return movie;
    }

    async getMovieByKinopoiskId( kinopoiskId: any ) {
        const movie = await this.movieRepo.findOne({
            where: { kinopoiskId },
            include: { all: true } 
        });
        return movie;
    }

    async getAllMovies() {
        const movies = await this.movieRepo.findAll();
        // const movies = await this.movieRepo.findAll({include: { all: true}});
        return movies;
    }

    async updateActorInMovie( 
        kinopoiskId: number, 
        actorKinopoiskIds: number[] ) {
        const movie = await this.movieRepo.findOne(
            {where: { kinopoiskId }});

        for (let i = 0; i < actorKinopoiskIds.length; i++) {
            let actor = await this.personService.getPersonByKinopoiskId(
                    actorKinopoiskIds[i]);
            await movie.$add( 'actors', [actor.personKinopoiskId] );
        }
        return movie;
    }

    async updatePersonInMovie( 
        kinopoiskId: number, 
        personKinopoiskIds: number[] ) {
        const movie = await this.movieRepo.findOne(
            {where: { kinopoiskId }});
        for (let i = 0; i < personKinopoiskIds.length; i++) {
            let person = await this.personService.getPersonByKinopoiskId(
                    personKinopoiskIds[i]);
            await movie.$add( 'persons', [person.personKinopoiskId] );
        }
        return movie;
    }

    async updateCountryInMovie( 
        kinopoiskId: number, 
        countryIds: number[] ) {
        const movie = await this.movieRepo.findOne(
            {where: { kinopoiskId }});
        for (let i = 0; i < countryIds.length; i++) {
            let country = await this.countryService.getCountryById(
                countryIds[i]);
            await movie.$add( 'countries', [country.countryId] );
        }
        return movie;
    }

    async updateGenreInMovie( 
        kinopoiskId: number, 
        genres: string[] ) {
        const movie = await this.movieRepo.findOne(
            {where: { kinopoiskId }});
        for (let i = 0; i < genres.length; i++) {
            let genre = await this.genreService.getGenreByName(
                genres[i]);
            await movie.$add( 'genres', [genre.genreEng] );
        }
        return movie;
    }

    async updateDetailInMovie( 
        kinopoiskId: number, 
        details: string[] ) {
        const movie = await this.movieRepo.findOne(
            {where: { kinopoiskId }});
        for (let i = 0; i < details.length; i++) {
            let detail = await this.detailService.getDetailByName(
                details[i]);
            await movie.$add( 'details', [detail.name] );
        }
        return movie;
    }

    async updateSimilarMovie( 
        kinopoiskId: number,
        similarIds: number[] ) {
        const movie = await this.movieRepo.findOne(
            {where: { kinopoiskId }});
        for (let i = 0; i < similarIds.length; i++) {
          let similar =  await this.similarService.getSimilarByKinopoiskId(
            similarIds[i]);
            await movie.$add( 'similarFilms', [similar.similarKinopoiskId] );
        }
        return movie;
    }
}
