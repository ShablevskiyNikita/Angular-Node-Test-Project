import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';

import { StorageService } from '../services/storage.service';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router,
              private storageService: StorageService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.storageService.checkIfAuthorized()) {
      this.router.navigate([ './' ]);
      return false;
    }
    return true;
  }
}
