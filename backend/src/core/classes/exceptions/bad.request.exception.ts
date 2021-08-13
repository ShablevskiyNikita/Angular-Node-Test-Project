import { HttpException } from './http.exception';

export class BadRequestException extends HttpException {
  constructor() {
    super(400, 'Bad request');
  }
}

