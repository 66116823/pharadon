import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/it')
  getit(): string {
    return 'it works';
  }

  @Get('/it2')
  getit2(): string {
    return 'it works 2';
  }
}
