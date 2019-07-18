import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import{MDBBootstrapModule} from 'angular-bootstrap-md';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/user/nosotros/nosotros.component';
import { PortfolioComponent } from './components/user/portfolio/portfolio.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { OffersComponent } from './components/user/offers/offers.component';
import { HeroComponent } from './components/hero/hero.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// Services

// Externals
//import { NgxSpinnerModule } from 'ngx-spinner';
//import { NgxPaginationModule } from 'ngx-pagination';
//import { ListEventosComponent } from './components/admin/list-eventos/list-eventos.component';
//import { DetailsEventoComponent } from './components/details-evento/details-evento.component';




import { FormComponent } from './components/user/form/form.component';

import { ReactiveFormsModule } from '@angular/forms';


/////lineas nuevas

//import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { InstitucionesComponent } from './components/instituciones/instituciones.component';
//import { AppRoutingModule } from './/app-routing.module';
import { PersonaComponent } from './components/persona/persona.component';


import { LoginrecolectorComponent } from './components/user/loginrecolector/loginrecolector.component';
import { PerfilrecolectorComponent } from './components/user/perfilrecolector/perfilrecolector.component';

import { LoginRecicladorComponent } from './components/login-reciclador/login-reciclador.component';
import { PerfilRecicladorComponent } from './components/perfil-reciclador/perfil-reciclador.component';

//import { LoginComponent } from './components/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NosotrosComponent,
    PortfolioComponent,
    
    NavbarComponent,
    OffersComponent,
    HeroComponent,
   
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    TruncateTextPipe,
    EmployeeComponent,
    InstitucionesComponent,
    PersonaComponent,
    FormComponent,

    
    LoginrecolectorComponent,
    
    PerfilrecolectorComponent,

    LoginRecicladorComponent,
    PerfilRecicladorComponent

  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule,AngularFontAwesomeModule, MDBBootstrapModule.forRoot()],
  bootstrap: [AppComponent],
  schemas:[NO_ERRORS_SCHEMA]

  
})
export class AppModule { }
