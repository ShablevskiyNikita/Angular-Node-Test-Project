import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHandler, HttpParams } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';
import { NotificationMessageConfig } from './notification-message-config.interface';

import { ERROR_MESSAGES } from './error-messages-config';

@Injectable()
export class HttpService extends HttpClient {

  constructor(
    handler: HttpHandler,
    private router: Router,
    private notification: ToastrService
  ) {
    super(handler);
  }

  get<T>(
    url: string,
    params?,
    DtoClass?: new (responseValue) => T,
    config?: {}
  ): Observable<T> {
    return super.get<T>(url, { params: this.parseParams(params) })
      .pipe(res => this.handleResponse(res, config),
        map(response => DtoClass ? new DtoClass(response) : response));
  }

  getAll<T>(
    url: string,
    params?,
    DtoClass?: new (responseValue) => T,
    config?: {}
  ): Observable<T[]> {
    return super.get<T[]>(url, { params: this.parseParams(params) })
      .pipe(res => this.handleResponse(res, config),
        map(response => DtoClass ? response.map(responseItem => new DtoClass(responseItem)) : response)
      );
  }

  update<T>(
    url: string,
    body,
    DtoClass?: new (responseValue) => T,
    config?: {}
  ): Observable<T> {
    return super.put<T>(url, body)
      .pipe(res => this.handleResponse(res, config),
        map(response => DtoClass ? new DtoClass(response) : response));
  }

  create<T>(
    url: string,
    body,
    DtoClass?: new (responseValue) => T,
    config?: {}
  ): Observable<T> {
    return super.post<T>(url, body)
      .pipe(res => this.handleResponse(res, config),
        map(response => DtoClass ? new DtoClass(response) : response));
  }

  remove<T>(
    url: string,
    params?,
    config?: {}
  ): Observable<T> {
    return super.delete<T>(url, { params: this.parseParams(params) })
      .pipe(res => this.handleResponse(res, config));
  }

  parseParams(data = {}): HttpParams {
    let params = new HttpParams();
    Object.keys(data).forEach(key => {
      if (Array.isArray(data[ key ]) && data[ key ].length) {
        for (const item of data[ key ]) {
          params = params.append(key, String(item));
        }
      } else if (data[ key ] && !Array.isArray(data[ key ])) {
        params = params.append(key, String(data[ key ]));
      }
    });
    return params;
  }

  handleResponse<T>(response: Observable<T>, config = {}, silent?: boolean): Observable<T> {
    return response
      .pipe(
        map(res => this.successResponse(res, config)),
        catchError(error => this.errorResponse(error, config))
      );
  }

  successResponse(response, config): any {
    if (config[ 200 ]) {
      this.notification.success(config[ 200 ]);
    }
    return response;
  }

  errorResponse(errorResponse: HttpErrorResponse, config: NotificationMessageConfig): Observable<never> {
    const errorMessage = config[ errorResponse.status ] ? config[ errorResponse.status ] : ERROR_MESSAGES[ errorResponse.status ];
    if (errorMessage) {
      this.notification.error(errorMessage);
    }

    return throwError(errorResponse);
  }
}
