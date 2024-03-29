import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ToastrService } from 'ngx-toastr';
import { StorageService } from '../auth/services/storage.service';

@Injectable()
export class RestInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private notification: ToastrService,
    private storageService: StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(this.getChangedRequest(request));
  }

  private getChangedRequest(request: HttpRequest<unknown>): HttpRequest<any> {
    const token = this.storageService.getTokenFromStorage() || 'empty token';
    return request.clone(this.getRequestParams(request, token));
  }

  private getRequestParams(request: HttpRequest<unknown>, token: string) {
    return {
      setHeaders: {
        Authorization: `Bearer ${token}`,
        ...this.getContentTypeHeader(request)
      }
    };
  }

  private getContentTypeHeader(request: HttpRequest<unknown>) {
    if (!(request.body instanceof FormData)) {
      return {
        'Content-Type': 'application/json'
      };
    }
  }
}
