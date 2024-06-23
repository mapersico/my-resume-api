import { NestFactory } from '@nestjs/core';

import { AppModule } from './core/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);
}

bootstrap();
