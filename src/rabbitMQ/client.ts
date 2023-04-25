import { Channel, Connection, connect } from "amqplib";
import config from "../config";
import Consumer from "./consumer";
import Producer from "./producer";

class RabbitMQClient {

    private constructor() {};

    private static instance: RabbitMQClient;
    private isInitialized = false;

    private consumer: Consumer;
    private producer: Producer;
    private connection: Connection;
    private consumerChannel: Channel;
    private producerChannel: Channel;

    public static getInstance() {
        if (!this.instance) {
            this.instance = new RabbitMQClient();
        }
        return this.instance;
    }

    async initialize() {
        if (this.isInitialized) {
            return;
        }
        try {
            this.connection = await connect(config.rabbitMQ.url);

            this.producerChannel = await this.connection.createChannel();
            this.consumerChannel = await this.connection.createChannel();

            // const {queue: replyQueueName} = await this.consumerChannel.assertQueue('');
            const {queue: replyQueueName} = await this.consumerChannel.assertQueue(
                'conectionQueueOfMovies',
                // {exclusive: true}
                );

            this.consumer = new Consumer(this.consumerChannel, replyQueueName);
            this.producer = new Producer(this.producerChannel, replyQueueName);

            this.consumer.consumeMessages();

            this.isInitialized = true;

        } catch(error) {
            console.log('rabbitMQ error ...', error);
        }
    }
    async produce(data: any) {
        if (!this.isInitialized) {
            await this.initialize();
        }
        return await this.producer.produceMessages(data);
    }
}

export default RabbitMQClient.getInstance();