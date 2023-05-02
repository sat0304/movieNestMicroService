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
        const movieName = await movieList.createMovieName(data);
        const actorNames = await movieList.createActorList(data);

        console.log('the movie name from class is ', movieName);
        console.log('the cast is ', actorNames);

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