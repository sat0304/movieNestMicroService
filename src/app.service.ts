import { Injectable, Req, Res } from '@nestjs/common';
import { CreateDto } from './dto/createDto';
import RabbitMQClient from './rabbitMQ/client';

// const rabbitClient = new RabbitMQClient();

@Injectable()
export class AppService {
  getHello(): string {
    return '{"strType" : "Hello World!", "counter": 2, "numOfstr": 3}';
  }
  

  async postData(@Req() req, @Res() res) {
    const body = req.body;
    RabbitMQClient.initialize();
    console.log(body);
    console.log('Hi, Everyone!');
    RabbitMQClient.produce(body);
    return res.sendStatus(200);
}
}