import { NextFunction, Request, Response } from 'express';

import { ICrudController } from '../../core/interfaces/controller.interface';
import { RequestModifiedBody } from '../../core/interfaces/requests/request.modified.body';

import { CreateTodoDto } from './dto/create.todo.dto';
import { UpdateTodoDto } from './dto/update.todo.dto';

class TodoController implements ICrudController {
  create(request: RequestModifiedBody<CreateTodoDto>, response: Response, next: NextFunction) {
    
  }
  
  getOne(request: Request, response: Response, next: NextFunction) {
    
  }
  
  getAll(request: Request, response: Response, next: NextFunction) {
    
  }
  
  update(request: RequestModifiedBody<UpdateTodoDto>, response: Response, next: NextFunction) {
    
  }
  
  delete(request: Request, response: Response, next: NextFunction) {
    
  }

}

export const TodoControllerInstance = new TodoController();
