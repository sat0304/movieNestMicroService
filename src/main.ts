import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import RabbitMQClient from './rabbitMQ/client';


async function bootstrap() {
  RabbitMQClient.initialize();
  const app = await NestFactory.create(AppModule);
}
bootstrap();
