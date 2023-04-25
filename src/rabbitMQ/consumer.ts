import { Channel, ConsumeMessage } from "amqplib";

export default class Consumer {
    constructor( private channel: Channel, private replyQueueName: string ){}

    async consumeMessages(){
        console.log('Ready to consume messages....Now');
        this.channel.consume(
            this.replyQueueName,
            async (message: ConsumeMessage) => {
            console.log('the reply is ...',
            JSON.parse(message.content.toString()));
        },
        {
            noAck: true,
        }
        );
    }
}
