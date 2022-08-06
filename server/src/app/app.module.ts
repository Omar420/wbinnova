import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';


// Components
import { SeleccionComponent } from './components/seleccion/seleccion.component';
import { BuscarZapatosComponent } from './components/buscar-zapatos/buscar-zapatos.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

// service
import { BuscarService } from './services/buscar.service';
import { LoginService } from './services/login.service';





@NgModule({
  declarations: [
    AppComponent,
    SeleccionComponent,
    BuscarZapatosComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [
    BuscarService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
