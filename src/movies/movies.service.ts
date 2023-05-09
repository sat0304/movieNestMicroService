import { Injectable } from '@nestjs/common';
import { Movie } from './movies.model';
import { CreateMovieDto } from './dto/createMovieDto';
import { InjectModel } from '@nestjs/sequelize';
import { PersonsService } from '../persons/persons.service';
import { Person } from '../persons/persons.model';

@Injectable()
export class MoviesService {

    constructor(
        @InjectModel(Movie) private movieRepo: typeof Movie,
        private personService: PersonsService) {}

    async createMovie( dto: CreateMovieDto ) {
        const movie = await this.movieRepo.create(dto);
        // const similarMovie = await this.getMovieByKinopoiskId(movieKinopoiskId);
        // await movie.$set( 'similarFilms', [similarMovie.kinopoiskId] );
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

    async updateActorInMovie( 
        kinopoiskId: number, 
        actorKinopoiskIds: number[] ) {
        const movie = await this.movieRepo.findOne(
            {where: { kinopoiskId }});
        // const actorId = await this.personService.getPersonByKinopoiskId(
        //     personKinopoiskId);
        // await movie.$set( 'actors', [actorId.personKinopoiskId] )
        // const actorData: Person = await this.personService.getPersonByKinopoiskId(
        //     personKinopoiskId);
        // movie.actors.push(actorData); 
        for (let i = 0; i < actorKinopoiskIds.length; i++) {
            let actor = await this.personService.getPersonByKinopoiskId(
                    actorKinopoiskIds[i]);
            console.log('actor KinopoiskId) ..', actorKinopoiskIds[i]);
            await movie.$set( 'actors', [actor.personKinopoiskId] );
            await movie.save();
        }
        await movie.save();
        return movie;
    }

    async updatePersonInMovie( 
        kinopoiskId: number, 
        personKinopoiskIds: number[] ) {
        const movie = await this.movieRepo.findOne(
            {where: { kinopoiskId }});

        // const personId = await this.personService.getPersonByKinopoiskId(
        //     personKinopoiskId);
        // await movie.$set( 'persons', [personId.personKinopoiskId] );
        // const personData: Person = await this.personService.getPersonByKinopoiskId(
        //     personKinopoiskId);
        // movie.persons.push(personData); 
        for (let i = 0; i < personKinopoiskIds.length; i++) {
            let person = await this.personService.getPersonByKinopoiskId(
                    personKinopoiskIds[i]);
            console.log('person  KinopoiskIds) \\ ', personKinopoiskIds[i]);
            await movie.$set( 'persons', [person.personKinopoiskId] );
            await movie.save();
        }
        return movie;
    }
}
