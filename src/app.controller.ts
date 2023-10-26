import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//* para que uma classe seja considerada um controller, ela deve ser decorada com @ controller

@Controller()
export class AppController {

  //* aqui vemos a injeção de dependencias, onde o metodo possui funcoes que nao estao acopladas
  //* e sim passadas por parametros.
  constructor(private readonly appService: AppService) {}

  //* mesma coisa para o metodo, para o metodo ser tratado com um verbo htt, ele deve ser decorado com o mesmo

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
