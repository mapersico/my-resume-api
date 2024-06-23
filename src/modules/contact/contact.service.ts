import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ContactService {
  constructor(
    private readonly mailerService: MailerService,
    private configService: ConfigService,
  ) {}

  async sendEmail(subject: string, content: string): Promise<void> {
    await this.mailerService.sendMail({
      to: this.configService.get<string>('EMAIL'),
      subject,
      text: content,
    });
  }
}
