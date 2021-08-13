import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginDto } from '@core/auth/dto/login.dto';
import { AuthService } from '@core/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginData = new LoginDto();

  mailPattern = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';

  constructor(private authService: AuthService) { }

  loginToAdminPage(): void{
    this.authService.login(this.loginData)
      .subscribe(authData => {

      });
  }

  checkForm(personalUserInfoForm: NgForm): boolean {
    personalUserInfoForm.control.markAllAsTouched();
    return personalUserInfoForm.valid;
  }
}
