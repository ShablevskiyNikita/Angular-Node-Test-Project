import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { HttpService } from './http.service';
import { RestInterceptor } from './rest.interceptor';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    HttpService,
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: RestInterceptor
    }
  ]
})
export class HttpModule {}
