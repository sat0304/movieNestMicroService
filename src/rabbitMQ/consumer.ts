import { Channel, ConsumeMessage } from "amqplib";
import MessageHandler from "../messageHandler";

export default class Consumer {
    constructor( private channel: Channel, private rpcQueueName: string ){}

    async consumeMessages(){
        console.log('It is movie server side to consume.');
        this.channel.consume(
            this.rpcQueueName,
            async (message: ConsumeMessage) => {
            const {correlationId, replyTo} = message.properties;
            const operation = message.properties.headers.function;

            if (!correlationId || !replyTo) {
                console.log('Missing some properties ...');

            } else {
                console.log('Property of correlationId is:', correlationId);
                console.log('Property of replyTo is:', replyTo);
                console.log('From iface has came ', JSON.parse(message.content.toString()));
            
            }

            await MessageHandler.handle(
                operation,
                // JSON.parse(message.content.toString()).operation,
                JSON.parse(message.content.toString()),
                correlationId,
                replyTo,)
        },
        {
            noAck: true,
        }
        );
    }
}
