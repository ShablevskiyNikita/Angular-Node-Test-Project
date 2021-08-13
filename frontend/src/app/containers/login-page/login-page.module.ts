import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AuthService } from '@core/auth/services/auth.service';
import { MaterialModule } from '@core/material/material.module';
import { LoginPageRouting } from './login-page.routing';
import { LoginPageComponent } from './login-page.component';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    MaterialModule,
    LoginPageRouting
  ],
  declarations: [ LoginPageComponent ],
  exports: [ LoginPageComponent ],
  providers: [ AuthService ]
})
export class LoginPageModule {}
