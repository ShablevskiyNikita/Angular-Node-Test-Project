import { HttpException } from './http.exception';

export class InternalErrorException extends HttpException {
  caughtError: Error;

  constructor(process: string, caughtError: Error) {
    super(500, `Internal error during ${process.toLowerCase()}`);
    this.caughtError = caughtError;
  }
}

