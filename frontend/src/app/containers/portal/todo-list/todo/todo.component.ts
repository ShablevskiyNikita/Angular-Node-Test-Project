import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TodoDto } from '@rest/todo/todo.dto';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: [ './todo.component.scss' ]
})
export class TodoComponent {
  @Input() todoData: TodoDto;
  @Output() todoDataChange = new EventEmitter<TodoDto>();

  updateTodo(): void {
    this.todoDataChange.emit(this.todoData);
  }
}
