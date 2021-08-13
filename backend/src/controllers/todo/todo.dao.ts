import { TodoModel } from './model/todo.model';
import { TodoModelType } from './model/todo.model.type';

class TodoDao {
  private todoModel = TodoModel;

  create(todo): Promise<TodoModelType> {
    return this.todoModel.create(todo);
  }

  findAll(): Promise<TodoModelType> {
    return this.todoModel.find();
  }

  findById(id: string): Promise<TodoModelType> {
    return this.todoModel.findById(id);
  }

  updateById(id: string, todo): Promise<TodoModelType> {
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true });
  }

  deleteById(id: string): Promise<TodoModelType> {
    return this.todoModel.findByIdAndDelete(id);
  }
}

export const TodoDaoInstance = new TodoDao();
