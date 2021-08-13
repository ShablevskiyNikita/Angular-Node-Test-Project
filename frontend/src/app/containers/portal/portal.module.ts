import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRouting } from './portal.routing';
import { PortalComponent } from './portal.component';
import { MaterialModule } from '@core/material/material.module';

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
