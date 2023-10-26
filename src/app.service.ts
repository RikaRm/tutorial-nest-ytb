import { Injectable } from '@nestjs/common';

// * para que a depencia possa ser injetada, ela precisa do decorator @injectable
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
