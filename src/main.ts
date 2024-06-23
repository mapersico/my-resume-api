import { NestFactory } from '@nestjs/core';

import { AppModule } from './core/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: process.env['ORIGIN'], credentials: true });
  app.setGlobalPrefix('api/v1');

  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}

bootstrap();
