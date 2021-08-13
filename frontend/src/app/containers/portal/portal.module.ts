import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRouting } from './portal.routing';
import { PortalComponent } from './portal.component';

@NgModule({
  declarations: [ PortalComponent ],
  imports: [
    CommonModule,
    PortalRouting
  ],
  exports: [ PortalComponent ]
})
export class PortalModule {}
