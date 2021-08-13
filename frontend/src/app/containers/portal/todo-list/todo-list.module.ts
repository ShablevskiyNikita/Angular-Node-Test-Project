import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoListRouting } from './todo-list.routing';

import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoListRouting
  ],
  exports: [ TodoListComponent ]
})
export class TodoListModule {}
