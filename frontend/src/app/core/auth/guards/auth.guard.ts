import { Injectable } from '@angular/core';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../services/storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private storageService: StorageService,
              private notification: ToastrService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.storageService.checkIfAuthorized()) {
      this.logout();
      return false;
    }
    return true;
  }

  logout(): void {
    this.storageService.removeTokenFromStorage();
    this.notification.warning('You need to login in the system');
    this.router.navigate([ '/login' ]);
  }
}
