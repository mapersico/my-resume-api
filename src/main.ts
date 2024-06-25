import { NestFactory } from '@nestjs/core';

import { AppModule } from './core/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: process.env['ORIGIN'], credentials: true });
  app.setGlobalPrefix('api/v1');
  const config = new DocumentBuilder()
    .setTitle('My Resume')
    .setDescription('API for my resume website')
    .setVersion('1.0')
    .addTag('myresume')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(parseInt(process.env.PORT, 10) || 3000);
}

bootstrap();
