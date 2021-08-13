import { RequestHandler } from 'express';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

import { BadRequestException } from '../classes/exceptions/bad.request.exception';

export const validateDtoMiddleware = (
  type: any,
  skipMissingProperties = false): RequestHandler => {
  return async (request, response, next) => {
    if (!Array.isArray(request.body)) {
      const plainedClass = plainToClass(type, request.body);
      const errors = await validate(plainedClass, { skipMissingProperties });
      if (errors.length > 0) {
        const errorsMessage = errors.map((error: ValidationError) => Object.values(error.constraints)).join(', ');
        next(new BadRequestException(errorsMessage));
      } else {
        next();
      }
    } else {
      next(new BadRequestException('Expected object but received array'));
    }
  };
};


