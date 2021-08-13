import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@core/material/material.module';
import { TodoListRouting } from './todo-list.routing';

import { TodoService } from '@rest/todo/todo.service';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    TodoListRouting
  ],
  exports: [ TodoListComponent ],
  providers: [ TodoService ]
})
export class TodoListModule {}
