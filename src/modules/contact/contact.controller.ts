import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { ContactService } from './contact.service';

interface ContactBody {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@ApiTags('contact')
@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('send-email')
  async sendEmail(@Body() body: ContactBody): Promise<void> {
    await this.contactService.sendEmail(
      body.subject,
      JSON.stringify(
        {
          name: body.name,
          email: body.email,
          description: body.message,
        },
        undefined,
        2,
      ),
    );
  }
}
