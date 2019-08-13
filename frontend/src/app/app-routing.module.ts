import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/components/home/home.component';
import { NosotrosComponent } from 'src/app/components/user/nosotros/nosotros.component';
import { PortfolioComponent } from 'src/app/components/user/portfolio/portfolio.component';
import { PremiosComponent } from 'src/app/components/user/premios/premios.component';


//import { OffersComponent } from 'src/app/components/user/offers/offers.component';




import {FormComponent} from 'src/app/components/user/form/form.component'

import { LoginComponent } from 'src/app/components/user/login/login.component';
//import { RegisterComponent } from 'src/app/components/user/register/register.component';
//import { ProfileComponent } from 'src/app/components/user/profile/profile.component';
import { Page404Component } from 'src/app/components/page404/page404.component';



///nuevas lineas

import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { InstitucionesComponent } from './components/instituciones/instituciones.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PersonaComponent } from './components/persona/persona.component';

//import { LoginrecolectorComponent } from './components/user/loginrecolector/loginrecolector.component';
import { PerfilrecolectorComponent } from './components/user/perfilrecolector/perfilrecolector.component';

//import { LoginRecicladorComponent } from './components/login-reciclador/login-reciclador.component';
import { PerfilRecicladorComponent } from './components/perfil-reciclador/perfil-reciclador.component';
import { PerfilsponsorComponent } from './components/sponsor/perfilsponsor/perfilsponsor.component';

import { RegistroComponent } from './components/user/registro/registro.component';
import { LogrosComponent } from './components/logros/logros.component';
import { ReportesComponent } from './components/reportes/reportes.component';

import { ParametroComponent } from './components/parametro/parametro.component';

import { EventoComponent } from './components/evento/evento.component';

import { RolComponent } from './components/rol/rol.component';
import { IngresomaticulaComponent } from './components/user/ingresomaticula/ingresomaticula.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'admin/empleados', component: EmployeeComponent},
  { path: 'admin/instituciones', component: InstitucionesComponent },
  { path: 'admin/personas', component: PersonaComponent },

  { path: 'admin/logros', component: LogrosComponent },
  { path: 'admin/reportes', component: ReportesComponent },
  { path: 'admin/evento', component: EventoComponent },

  { path: 'admin/parametro', component: ParametroComponent },

  { path: 'admin/roles', component: RolComponent },
  


  { path: 'user/login', component: LoginComponent },
  { path: 'user/ingresomatricula', component: IngresomaticulaComponent },
 // { path: 'user/register', component: RegisterComponent },
  //{ path: 'user/profile', component: ProfileComponent }, // TODO: only users auth
  { path: 'user/portfolio',component:PortfolioComponent},
  { path: 'user/premios',component:PremiosComponent},
  { path: 'user/nosotros', component: NosotrosComponent },
  { path: 'user/contactanos', component: FormComponent },

  //{ path: 'user/loginrecolector', component: LoginrecolectorComponent },
  { path: 'user/perfilrecolector', component: PerfilrecolectorComponent },
  { path: 'sponsor/perfilsponsor', component: PerfilsponsorComponent},
  
  //{ path: 'loginReciclador', component: LoginRecicladorComponent},
  { path: 'perfilreciclador', component: PerfilRecicladorComponent},
  { path: 'user/registro', component: RegistroComponent},







  { path: '**', component: Page404Component },
 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
