import { isValidObjectId } from 'mongoose';
import { NextFunction, RequestHandler, Request, Response } from 'express';

import { BadRequestException } from '../classes/exceptions/bad.request.exception';

export class CommonMiddleware {
  checkIdValidity = (idName?: string) => {
    return (request: Request, response: Response, next: NextFunction) => {
      const targetId = idName ? request.params[ idName ] : request.params.id;
      if (targetId.match(/^[0-9a-fA-F]{24}$/)) {
        if (isValidObjectId(targetId)) {
          next();
        } else {
          next(new BadRequestException());
        }
      } else {
        next(new BadRequestException());
      }
    };
  };

  castRequestBodyToDto = <T>(DtoClass: new (requestValue) => T): RequestHandler => {
    return (request, response, next) => {
      request.body = new DtoClass(request.body);
      next();
    };
  };
}
