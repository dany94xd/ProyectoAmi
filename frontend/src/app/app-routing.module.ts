import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NosotrosComponent } from 'src/app/components/user/nosotros/nosotros.component';
import { PortfolioComponent } from 'src/app/components/user/portfolio/portfolio.component';
import { ComprarComponent } from 'src/app/components/user/comprar/comprar.component';
import { OffersComponent } from 'src/app/components/user/offers/offers.component';
import { LocalidadComponent } from 'src/app/components/user/localidad/localidad.component';


import { DetailsBookComponent } from 'src/app/components/details-book/details-book.component';
import { ListBooksComponent } from 'src/app/components/admin/list-books/list-books.component';
import{ListEventosComponent} from 'src/app/components/admin/list-eventos/list-eventos.component';
import{DetailsEventoComponent} from 'src/app/components/details-evento/details-evento.component';

import {ListRecintosComponent} from 'src/app/components/admin/list-recintos/list-recintos.component';
import {ListTarifaComponent} from 'src/app/components/admin/list-tarifa/list-tarifa.component';
import {ListFilasComponent} from 'src/app/components/admin/list-filas/list-filas.component';

import {ListLocalidadesComponent} from 'src/app/components/admin/list-localidades/list-localidades.component';
import {ListPreciosComponent} from 'src/app/components/admin/list-precios/list-precios.component';
import {ListAsientosComponent} from 'src/app/components/admin/list-asientos/list-asientos.component';

import {ListBloquesComponent} from 'src/app/components/admin/list-bloques/list-bloques.component';
import {ListTicketsComponent} from 'src/app/components/admin/list-tickets/list-tickets.component';
import {ListUsersComponent} from 'src/app/components/admin/list-users/list-users.component';
import {FormComponent} from 'src/app/components/user/form/form.component'

import { LoginComponent } from 'src/app/components/user/login/login.component';
import { RegisterComponent } from 'src/app/components/user/register/register.component';
import { ProfileComponent } from 'src/app/components/user/profile/profile.component';
import { Page404Component } from 'src/app/components/page404/page404.component';


///nuevas lineas

import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { InstitucionesComponent } from './components/instituciones/instituciones.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PersonaComponent } from './components/persona/persona.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'book/:id', component: DetailsBookComponent },
  { path: 'empleados', component: EmployeeComponent},
  { path: 'instituciones', component: InstitucionesComponent },
  { path: 'personas', component: PersonaComponent },
  { path: '', component: LoginComponent },

  { path: 'user/offers', component: OffersComponent }, 
  { path: 'user/login', component: LoginComponent },
  { path: 'user/register', component: RegisterComponent },
  { path: 'user/profile', component: ProfileComponent, canActivate: [AuthGuard] }, // TODO: only users auth
  { path: 'evento/:id' , component:DetailsEventoComponent},
  { path: 'user/portfolio',component:PortfolioComponent},
  { path: 'user/nosotros', component: NosotrosComponent },
  { path: 'user/contactanos', component: FormComponent },
  { path: 'user/localidad', component: LocalidadComponent , canActivate: [AuthGuard]},
  { path: 'user/localidad/:id', component: LocalidadComponent , canActivate: [AuthGuard]},
  { path: 'user/comprar', component: ComprarComponent , canActivate: [AuthGuard]},

  { path: 'admin/list-eventos',component:ListEventosComponent,canActivate:[AuthGuard]},
  { path: 'admin/list-books', component: ListBooksComponent, canActivate: [AuthGuard] }, // TODO: only users auth
  { path:'admin/list-recintos', component: ListRecintosComponent, canActivate:[AuthGuard]},
  { path:'admin/list-recintos', component: ListRecintosComponent, canActivate:[AuthGuard]},
  { path:'admin/list-tarifa',component:ListTarifaComponent,canActivate:[AuthGuard]},
  { path:'admin/list-filas',component:ListFilasComponent,canActivate:[AuthGuard]},
  { path:'admin/list-precios',component:ListPreciosComponent,canActivate:[AuthGuard]},
  { path: 'admin/list-recintos', component: ListRecintosComponent, canActivate:[AuthGuard]},
  { path: 'admin/list-localidades', component: ListLocalidadesComponent, canActivate:[AuthGuard]},
  { path: 'admin/list-bloques', component: ListBloquesComponent, canActivate:[AuthGuard]},
  { path: 'admin/list-tarifa',component:ListTarifaComponent,canActivate:[AuthGuard]},
  { path: 'admin/list-tickets', component: ListTicketsComponent, canActivate:[AuthGuard]},
  { path: 'admin/list-filas',component:ListFilasComponent,canActivate:[AuthGuard]},
  { path: 'admin/list-asientos',component:ListAsientosComponent,canActivate:[AuthGuard]},
  {path: 'admin/list-users',component:ListUsersComponent,canActivate:[AuthGuard]},

  { path: '**', component: Page404Component },
 
];

@NgModule({
  imports: RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), CommonModule,
  exports: [RouterModule]
})
export class AppRoutingModule { }
