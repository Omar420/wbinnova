import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CrearComponent } from './crear/crear.component';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PanelAdminComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
