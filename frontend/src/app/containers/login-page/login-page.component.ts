import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { LoginDto } from '@core/auth/dto/login.dto';
import { AuthService } from '@core/auth/services/auth.service';
import { StorageService } from '@core/auth/services/storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: [ './login-page.component.scss' ]
})
export class LoginPageComponent {
  loginData = new LoginDto();

  mailPattern = '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?';

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService) { }

  loginToAdminPage(): void {
    this.authService.login(this.loginData)
      .subscribe(authData => {
        this.storageService.setTokenToStorage(authData.access_token);
        this.router.navigateByUrl('/');
      });
  }

  checkForm(personalUserInfoForm: NgForm): boolean {
    personalUserInfoForm.control.markAllAsTouched();
    return personalUserInfoForm.valid;
  }
}
