import { Controller, Get } from '@nestjs/common';

@Controller('')
export class AppController {
  constructor() {}

  @Get('')
  async getHome(): Promise<string> {
    return 'Hello World!';
  }
}
