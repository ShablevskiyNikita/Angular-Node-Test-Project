import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { LoginPageComponent } from './login-page.component';
import { AuthService } from '@core/auth/services/auth.service';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [ LoginPageComponent ],
  exports: [ LoginPageComponent ],
  providers: [ AuthService ]
})
export class LoginPageModule {}
