import { NextFunction, Request, Response } from 'express';

import { ICrudController } from '../../core/interfaces/controller.interface';
import { RequestModifiedBody } from '../../core/interfaces/requests/request.modified.body';

import { CreateTodoDto } from './dto/create.todo.dto';
import { UpdateTodoDto } from './dto/update.todo.dto';

import { InternalErrorException } from '../../core/classes/exceptions/internal.error.exception';

import { TodoDaoInstance } from './todo.dao';

class TodoController implements ICrudController {
  async create(request: RequestModifiedBody<CreateTodoDto>, response: Response, next: NextFunction) {
    try {
      const todo = await TodoDaoInstance.create(request.body);
      
      response.send(todo);
    } catch (error) {
      next(new InternalErrorException('Create todo', error));
    }
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const todo = await TodoDaoInstance.findById(id);

      response.send(todo);
    } catch (error) {
      next(new InternalErrorException('Getting todo', error));
    }
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    try {
      const todos = await TodoDaoInstance.findAll();

      response.send(todos);
    } catch (error) {
      next(new InternalErrorException('Getting todos', error));
    }
  }

  async update(request: RequestModifiedBody<UpdateTodoDto>, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      const todo = await TodoDaoInstance.updateById(id, request.body);

      response.send(todo);
    } catch (error) {
      next(new InternalErrorException('Updating todo', error));
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const { id } = request.params;
      await TodoDaoInstance.deleteById(id);

      response.send({
        status: 200,
        message: 'Successfully deleted'
      });
    } catch (error) {
      next(new InternalErrorException('Deleting todo', error));
    }
  }

}

export const TodoControllerInstance = new TodoController();
