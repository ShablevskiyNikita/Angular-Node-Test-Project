import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [ LoginPageComponent ],
  exports: [ LoginPageComponent ]
})
export class LoginPageModule {}
