import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarZapatosComponent } from '../buscar-zapatos/buscar-zapatos.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    {path: 'buscar', component: BuscarZapatosComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
