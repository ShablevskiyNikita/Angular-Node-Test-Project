import { NgModule } from '@angular/core';

import { HttpModule } from '@core/http/http.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AuthGuard } from '@core/auth/guards/auth.guard';
import { LoginGuard } from '@core/auth/guards/login.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    ToastrModule.forRoot({
      closeButton: true,
      timeOut: 4000,
      tapToDismiss: false,
      autoDismiss: true,
      easeTime: 500
    }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
