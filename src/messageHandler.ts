import { GenresController } from "./genres/genres.controller";
import { Genre } from "./genres/genres.model";
import { GenresService } from "./genres/genres.service";
import rabbitClient from "./rabbitMQ/client";

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
        const {value} = data;

        console.log('the routingKey is ', routingKey);


        switch (routingKey) {
            case 'getGenres':
            response = await genresController.getAll();
            break;
            case 'getGenre':
            response = await genresController.getByValue(value);
            break;
            case 'postMovie': 
                // await genresController.create({enName, description});
                response = 'The new movie was created';
            break;
            case 'postGenre': 
            console.log(enName, description);
            // await genresController.create({enName, description});
            response = enName;
        break;
            default: response = 0;
            break;
        }
        await rabbitClient.produce(response, correlationId, replyTo)
    }
}