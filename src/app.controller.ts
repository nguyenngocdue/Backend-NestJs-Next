import { Controller, Get, Post, Query, Req } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post("/demo/:name2/:email2")
  getDemo(@Req() req,
    @Query("name") name,
    @Query("email") email,
    @Query("name2") name2,
  ) {
    return {name: name, email: email, name2: name2};
  }
}
