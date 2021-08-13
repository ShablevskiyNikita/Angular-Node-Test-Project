import { CommonRoute } from '../../core/classes/common.route';

import { TodoMiddlewareInstance } from './todo.middleware';
import { TodoControllerInstance } from './todo.controller';

import { validateDtoMiddleware } from '../../core/middleware/validate.dto.middleware';

import { CreateTodoDto } from './dto/create.todo.dto';
import { UpdateTodoDto } from './dto/update.todo.dto';

export class TodoRouter extends CommonRoute {
  constructor() {
    super('/todo');
  }

  initializeRoutes() {
    // TODO Verifying
    this.router
      .post(
        `${this.path}/`,
        validateDtoMiddleware(CreateTodoDto),
        TodoMiddlewareInstance.castRequestBodyToDto(CreateTodoDto),
        TodoControllerInstance.create)
      .get(
        `${this.path}/`,
        TodoControllerInstance.getAll)
      .get(
        `${this.path}/:id`,
        TodoMiddlewareInstance.checkIdValidity,
        TodoMiddlewareInstance.checkTodoExisting,
        TodoControllerInstance.getOne)
      .put(
        `${this.path}/:id`,
        TodoMiddlewareInstance.checkIdValidity,
        TodoMiddlewareInstance.checkTodoExisting,
        validateDtoMiddleware(UpdateTodoDto),
        TodoMiddlewareInstance.castRequestBodyToDto(UpdateTodoDto),
        TodoControllerInstance.update)
      .delete(
        `${this.path}/:id`,
        TodoMiddlewareInstance.checkIdValidity,
        TodoMiddlewareInstance.checkTodoExisting,
        TodoControllerInstance.delete)
    ;
  }
}
