import { MailerOptions } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

export const mailerConfig: (config: ConfigService) => MailerOptions = (
  configService,
) => {
  return {
    transport: {
      host: configService.get('EMAIL_HOST'),
      port: +configService.get('EMAIL_PORT') || 587,
      ignoreTLS: false,
      secure: false,
      auth: {
        user: configService.get('EMAIL'),
        pass: configService.get('EMAIL_PASSWORD'),
      },
      authMethod: 'PLAIN',
    },
  };
};
