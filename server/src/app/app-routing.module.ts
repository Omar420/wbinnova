import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component
import { SeleccionComponent } from './components/seleccion/seleccion.component';

const routes: Routes = [
  {path: '', component: SeleccionComponent},
  {path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
