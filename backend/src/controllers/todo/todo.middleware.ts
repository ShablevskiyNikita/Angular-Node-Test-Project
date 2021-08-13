import { NextFunction, Request, Response } from 'express';

import { CommonMiddleware } from '../../core/middleware/common.middleware';

import { TodoDaoInstance } from './todo.dao';

import { NotFoundException } from '../../core/classes/exceptions/not.found.exception';
import { InternalErrorException } from '../../core/classes/exceptions/internal.error.exception';

class TodoMiddleware extends CommonMiddleware {
  checkTodoExisting = async (request: Request, response: Response, next: NextFunction) => {
    try {
      const delivery = await TodoDaoInstance.findById(request.params.id);
      if (delivery) {
        next();
      } else {
        next(new NotFoundException());
      }
    } catch (error) {
      next(new InternalErrorException());
    }
  };
}

export const TodoMiddlewareInstance = new TodoMiddleware();
