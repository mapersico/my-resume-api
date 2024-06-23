import { NestFactory } from '@nestjs/core';

import { AppModule } from './core/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log(process.env);

  app.enableCors({ origin: process.env['ORIGIN'], credentials: true });
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);
}

bootstrap();
