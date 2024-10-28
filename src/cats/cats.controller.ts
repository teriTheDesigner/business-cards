import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  //@HttpCode(201)
  @Get()
  getCats(): string {
    return 'These are all cats';
  }
}
