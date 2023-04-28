import { GenresController } from "./genres/genres.controller";
import { Genre } from "./genres/genres.model";
import { GenresService } from "./genres/genres.service"
import rabbitClient from "./rabbitMQ/client"

const genresService = new GenresService(Genre);
const genresController = new GenresController(genresService);

export default class MessageHandler{

    static async handle(
        routingKey: string,
        data: any,
        correlationId: string,
        replyTo: string,
    ) {
        
        let response = {};

        const {enName, description} = data;

        console.log('the routingKey is ', routingKey);

        switch (routingKey) {
            case 'getMovie': response = genresService.getGenreByValue('Comedy');
            break;
            case 'postMovie': (genresController.create(
                {enName, 
                description}),
                response = 'genre is created');
            break;
            default: response = 0;
            break;
        }
        await rabbitClient.produce(response, correlationId, replyTo)
    }
}