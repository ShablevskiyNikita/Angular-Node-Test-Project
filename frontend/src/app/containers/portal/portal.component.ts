import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { StorageService } from '@core/auth/services/storage.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: [ './portal.component.scss' ]
})
export class PortalComponent {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  logout(): void {
    this.storageService.removeTokenFromStorage();
    this.router.navigate([ '/login' ]);
  }
}
