import { TodoModel } from './model/todo.model';
import { TodoModelType } from './model/todo.model.type';

import { CreateTodoDto } from './dto/create.todo.dto';
import { UpdateTodoDto } from './dto/update.todo.dto';

class TodoDao {
  private todoModel = TodoModel;

  create(todo: CreateTodoDto): Promise<TodoModelType> {
    return this.todoModel.create(todo);
  }

  findAll(): Promise<TodoModelType> {
    return this.todoModel.find();
  }

  findById(id: string): Promise<TodoModelType> {
    return this.todoModel.findById(id);
  }

  updateById(id: string, todo: UpdateTodoDto): Promise<TodoModelType> {
    return this.todoModel.findByIdAndUpdate(id, {
      $set: todo
    }, { new: true });
  }

  deleteById(id: string): Promise<TodoModelType> {
    return this.todoModel.findByIdAndDelete(id);
  }
}

export const TodoDaoInstance = new TodoDao();
