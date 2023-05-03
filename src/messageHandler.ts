import { GenresController } from "./genres/genres.controller";
import { Genre } from "./genres/genres.model";
import { GenresService } from "./genres/genres.service";
import { MovieList } from "./jsonParser";
import rabbitClient from "./rabbitMQ/client";

const genresService = new GenresService(Genre);
const genresController = new GenresController(genresService);
const movieList = new MovieList();

export default class MessageHandler{

    static async handle(
        routingKey: string,
        data: any,
        correlationId: string,
        replyTo: string,
    ) {
        
        let response = {};


        const {genre, genreEng} = data;
        // const {entityJSON:{name, actors}} = data;
        const {id} = data;
        await movieList.createMovieFeatures(data);
        await movieList.createActorList(data);
        await movieList.createGenreList(data);
        await movieList.createCountryList(data);


        console.log('the movie name from class is ', movieList.movieName);
        console.log('the cast names are ', movieList.actorName);
        console.log('the poster is ', movieList.moviePoster);
        console.log('the movie Original Name is', movieList.movieOriginalName);
        console.log('the movie description is', movieList.movieDescription);
        console.log('the movie trailer link is', movieList.movieTrailerLink);
        console.log('the movie release year is', movieList.movieYear);
        console.log('the movie length is', movieList.movieLength);
        console.log('the movie ageRating is', movieList.movieAgeRating);
        console.log('the genres names are', movieList.genreName);
        console.log('the genres names English are', movieList.genreNameEng);
        console.log('the countries names are', movieList.countryName);
        console.log('the countries ids are', movieList.countryId);
        console.log('the kinopoisk rate is', movieList.movieRate);

        switch (routingKey) {
            case 'getGenres':
            response = await genresController.getAll();
            break;
            case 'getGenre':
            response = await genresController.getById(id);
            break;
            case 'postMovie': 
                // await genresController.create({enName, description});
                response = 'The new movie was created';
            break;
            case 'postGenre': 
            console.log(genre, genreEng);
            await genresController.create({genre, genreEng});
            response = genre;
        break;
            default: response = 0;
            break;
        }
        await rabbitClient.produce(response, correlationId, replyTo)
    }
}