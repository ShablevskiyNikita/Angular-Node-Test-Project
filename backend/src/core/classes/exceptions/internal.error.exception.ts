import { HttpException } from './http.exception';

export class InternalErrorException extends HttpException {
  constructor() {
    super(500, 'Internal error');
  }
}

