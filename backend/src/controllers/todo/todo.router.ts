import { CommonRoute } from '../../core/classes/common.route';

import { TodoMiddlewareInstance } from './todo.middleware';
import { TodoControllerInstance } from './todo.controller';

import { validateDtoMiddleware } from '../../core/middleware/validate.dto.middleware';
import { verifyRequestMiddleware } from '../../core/middleware/verify.middleware';

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
        verifyRequestMiddleware,
        validateDtoMiddleware(CreateTodoDto),
        TodoMiddlewareInstance.castRequestBodyToDto(CreateTodoDto),
        TodoControllerInstance.create)
      .get(
        `${this.path}/`,
        verifyRequestMiddleware,
        TodoControllerInstance.getAll)
      .get(
        `${this.path}/:id`,
        verifyRequestMiddleware,
        TodoMiddlewareInstance.checkIdValidity(),
        TodoMiddlewareInstance.checkTodoExisting,
        TodoControllerInstance.getOne)
      .put(
        `${this.path}/:id`,
        verifyRequestMiddleware,
        TodoMiddlewareInstance.checkIdValidity(),
        TodoMiddlewareInstance.checkTodoExisting,
        validateDtoMiddleware(UpdateTodoDto),
        TodoMiddlewareInstance.castRequestBodyToDto(UpdateTodoDto),
        TodoControllerInstance.update)
      .delete(
        `${this.path}/:id`,
        verifyRequestMiddleware,
        TodoMiddlewareInstance.checkIdValidity(),
        TodoMiddlewareInstance.checkTodoExisting,
        TodoControllerInstance.delete);
  }
}
