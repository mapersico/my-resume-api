import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';
import { mailerConfig } from './contact.config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService) => ({
        ...mailerConfig(configService),
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService],
})
export class ContactModule {}
