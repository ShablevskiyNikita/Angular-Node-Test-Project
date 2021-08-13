import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRouting } from './portal.routing';
import { MaterialModule } from '@core/material/material.module';
import { PortalComponent } from './portal.component';

@NgModule({
  declarations: [ PortalComponent ],
  imports: [
    CommonModule,
    PortalRouting,
    MaterialModule
  ],
  exports: [ PortalComponent ]
})
export class PortalModule {}
