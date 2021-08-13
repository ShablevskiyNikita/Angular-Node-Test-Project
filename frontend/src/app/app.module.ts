import { NgModule } from '@angular/core';

import { HttpModule } from '@core/http/http.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

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
      maxOpened: 1,
      easeTime: 500,
      positionClass: 'toast-bottom',
    }),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
