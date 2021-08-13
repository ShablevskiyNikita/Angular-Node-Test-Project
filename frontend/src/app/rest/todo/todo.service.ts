import { Injectable } from '@angular/core';

import { HttpService } from '@core/http/http.service';
import { TodoDto } from './todo.dto';
import { Observable } from 'rxjs';

@Injectable()
export class TodoService {
  path = 'api/todo';

  constructor(private http: HttpService) {}

  createTodo(data: TodoDto): Observable<TodoDto> {
    return this.http.create<TodoDto>(`${this.path}`, data, TodoDto, {
      200: 'Todo successfully created',
      201: 'Todo successfully created',
      400: 'Wrong todo data',
      401: 'Need authorization'
    });
  }

  getTodos(): Observable<TodoDto[]> {
    return this.http.getAll<TodoDto>(`${this.path}`, {}, TodoDto);
  }

  updateDto(data: TodoDto): Observable<TodoDto> {
    return this.http.update<TodoDto>(`${this.path}`, data, TodoDto, {
      200: 'Todo successfully updated',
      201: 'Todo successfully updated',
      400: 'Wrong todo data',
      401: 'Need authorization'
    });
  }

  deleteDto(data: TodoDto): Observable<TodoDto> {
    return this.http.remove<TodoDto>(`${this.path}/${data._id}`, {}, {
      200: 'Successfully deleted Todo',
      201: 'Successfully deleted Todo',
      404: 'Todo not found'
    });
  }
}
