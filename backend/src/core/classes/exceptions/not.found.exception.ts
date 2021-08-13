import { HttpException } from './http.exception';

export class BadRequestException extends HttpException {
  constructor() {
    super(404, 'Not found');
  }
}

