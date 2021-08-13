import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { RequestHandler } from 'express';

import { BadRequestException } from '../classes/exceptions/bad.request.exception';

export const validateDtoMiddleware = (
  type: any,
  skipMissingProperties = false): RequestHandler => {
  return async (request, response, next) => {
    if (!Array.isArray(request.body)) {
      const plainedClass = plainToClass(type, request.body);
      const errors = await validate(plainedClass, { skipMissingProperties });
      if (errors.length > 0) {
        next(new BadRequestException());
      } else {
        next();
      }
    } else {
      next(new BadRequestException());
    }
  };
};


