import rabbitClient from "./rabbitMQ/client"

export default class MessageHandler{
    static async handle(
        operation: string,
        data: any,
        correlationId: string,
        replyTo: string,
    ) {
        let response = {};

        const {num1, num2} = data;

        console.log('the operation is ', operation);

        switch (operation) {
            case 'multiply': response = num1 * num2;
            break;
            case 'sum': response = num1 + num2;
            break;
            default: response = 0;
            break;
        }

        await rabbitClient.produce(response, correlationId, replyTo)

    }
}