import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { TodoDto } from '@rest/todo/todo.dto';
import { TodoService } from '@rest/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: [ './todo-list.component.scss' ]
})
export class TodoListComponent implements OnInit {
  todos: TodoDto[] = [];

  tempTodo = new TodoDto();

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos()
      .subscribe(todos => {
        this.todos = todos;
      });
  }

  createTodo(form: NgForm): void {
    this.todoService.createTodo(this.tempTodo)
      .subscribe(createdToDo => {
        this.todos.push(createdToDo);
        this.tempTodo = new TodoDto();
        form.resetForm();
      });
  }

  updateTodo(todo: TodoDto): void {
    this.todoService.updateDto(todo)
      .subscribe(updatedTodo => {
        this.todos = this.todos.map(item => {
          return item._id === updatedTodo._id ? updatedTodo : item;
        });
      });
  }

  deleteTodo(todo: TodoDto): void {
    this.todoService.deleteDto(todo)
      .subscribe(() => {
        this.todos = this.todos.filter(item => item._id !== todo._id);
      });
  }
}
