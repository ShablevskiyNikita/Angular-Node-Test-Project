import { NextFunction, Request, Response } from 'express';

import { ICrudController } from '../../core/interfaces/controller.interface';
import { RequestModifiedBody } from '../../core/interfaces/requests/request.modified.body';

import { CreateTodoDto } from './dto/create.todo.dto';
import { UpdateTodoDto } from './dto/update.todo.dto';

import { InternalErrorException } from '../../core/classes/exceptions/internal.error.exception';

class TodoController implements ICrudController {
  create(request: RequestModifiedBody<CreateTodoDto>, response: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(new InternalErrorException('Create todo', error));
    }
  }

  getOne(request: Request, response: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(new InternalErrorException('Getting todo', error));
    }
  }

  getAll(request: Request, response: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(new InternalErrorException('Getting todos', error));
    }
  }

  update(request: RequestModifiedBody<UpdateTodoDto>, response: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(new InternalErrorException('Updating todo', error));
    }
  }

  delete(request: Request, response: Response, next: NextFunction) {
    try {

    } catch (error) {
      next(new InternalErrorException('Deleting todo', error));
    }
  }

}

export const TodoControllerInstance = new TodoController();
