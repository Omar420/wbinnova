import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';

// component
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { BuscarZapatosComponent } from './components/buscar-zapatos/buscar-zapatos.component';
import { CrearComponent } from './components/dashboard/crear/crear.component';



const routes: Routes = [
  {path: '', component: BuscarZapatosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'dashboard', loadChildren: () => import('./components/dashboard/dashboard.module').then(x => x.DashboardModule)},
  {path: '**', redirectTo: '', pathMatch: 'full'},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
