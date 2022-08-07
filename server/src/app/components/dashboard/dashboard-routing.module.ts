import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PanelAdminComponent } from '../dashboard/panel-admin/panel-admin.component';
import { CrearComponent } from './crear/crear.component';

const routes: Routes = [
  {path: '', component: PanelAdminComponent, children: [
    {path: 'crear', component: CrearComponent},
    {path: 'admin', component: PanelAdminComponent},
  ]},

  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
