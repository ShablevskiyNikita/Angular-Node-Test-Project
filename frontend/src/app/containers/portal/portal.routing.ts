import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PortalComponent } from './portal.component';

const routes: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      {
        path: '',
        redirectTo: 'todo'
      },
      {
        path: 'todo',
        loadChildren: () => import('./todo-list/todo-list.module').then(u => u.TodoListModule)
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PortalRouting {}
