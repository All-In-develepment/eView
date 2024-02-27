import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv  from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 5000);
  app.enableCors({
    origin: 'http://localhost:3000', // Permite requisições desse domínio
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Permite esses métodos HTTP
    allowedHeaders: ['Content-Type', 'Authorization'], // Permite esses cabeçalhos
  });
}
bootstrap();
