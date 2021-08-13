import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '@core/auth/guards/auth.guard';
import { LoginGuard } from '@core/auth/guards/login.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./containers/portal/portal.module').then(u => u.PortalModule)
  },
  {
    path: 'login',
    canActivate: [ LoginGuard ],
    loadChildren: () => import('./containers/login-page/login-page.module').then(u => u.LoginPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./containers/not-found-page/not-found-page.module').then(u => u.NotFoundPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
