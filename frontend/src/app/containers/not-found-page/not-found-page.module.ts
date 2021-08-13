import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundPageRouting } from './not-found-page.routing';
import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  declarations: [ NotFoundPageComponent ],
  imports: [
    CommonModule,
    NotFoundPageRouting
  ],
  exports: [ NotFoundPageComponent ]
})
export class NotFoundPageModule {}
