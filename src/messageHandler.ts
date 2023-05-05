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

        const {id} = data;
        await movieList.createMovieFeatures(data);
        await movieList.createActorList(data);
        await movieList.createGenreList(data);
        await movieList.createCountryList(data);
        await movieList.createDetailList(data);
        await movieList.createSimilarList(data);
        // await movieList.putGenresToDatabase();
        await movieList.putMoviesToDatabase();


        // console.log('the movie name from class is ', movieList.movieName);
        // console.log('the cast names are ', movieList.actorName);
        // console.log('the cast Links to pages are ', movieList.actorLink);
        // console.log('the actors KinopoiskIds are', movieList.actorKinopoiskId);
        // console.log('the poster is ', movieList.moviePoster);
        // console.log('the movie Original Name is', movieList.movieOriginalName);
        // console.log('the movie description is', movieList.movieDescription);
        // console.log('the movie trailer link is', movieList.movieTrailerLink);
        // console.log('the movie release year is', movieList.movieYear);
        // console.log('the movie length is', movieList.movieLength);
        // console.log('the movie ageRating is', movieList.movieAgeRating);
        // console.log('the genres names are', movieList.genreName);
        // console.log('the genres names English are', movieList.genreNameEng);
        // console.log('the countries names are', movieList.countryName);
        // console.log('the countries ids are', movieList.countryId);
        // console.log('the kinopoisk rate is', movieList.movieRate);
        // console.log('the details names are', movieList.detailName);
        // console.log('the details values are', movieList.detailValue);
        // console.log('the makers are', movieList.personOccupation);
        // console.log('the makers ids are', movieList.personId);
        // console.log('the similar films names are', movieList.similarName);
        // console.log('the similar films Urls are', movieList.similarUrl);
        // console.log('the similar films KinopoiskIds are', movieList.similarKinopoiskId);
        // console.log('the movie KinopoiskId is', movieList.movieKinopoiskId);

        switch (routingKey) {
            case 'getGenres':
            response = await genresController.getAll();
            break;
            case 'getGenre':
            response = await genresController.getById(id);
            break;
            case 'postMovie': response = 'The new movie was created';
            break;
            case 'postGenre': response = 'The new genre was created';
        break;
            default: response = 0;
            break;
        }
        await rabbitClient.produce(response, correlationId, replyTo)
    }
}