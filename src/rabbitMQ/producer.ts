import { Channel} from "amqplib";
import config from "../config";
// import { randomUUID } from "crypto";

export default class Producer {
    constructor( private channel: Channel, private replyQueueName: string ){}

    async produceMessages(data: any){
        // const uuid = randomUUID();
        const uuid = 'conectionQueueOfMovies';
        console.log('the correlation ID is ...', uuid);
        this.channel.sendToQueue(
            config.rabbitMQ.queues.rpcQueue,
            Buffer.from(JSON.stringify(data)), {
                replyTo: this.replyQueueName,
                correlationId: uuid,
                headers: {
                    function: data.operation
                }
            }
        );
        // wait for response
        // await
    }
}