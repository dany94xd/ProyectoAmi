import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes,PreloadAllModules } from '@angular/router';
import { InstitucionesComponent } from './components/instituciones/instituciones.component';
import { EmployeeComponent } from './components/employee/employee.component';



const routes: Routes = [
  { path: 'empleados', component: EmployeeComponent},
  { path: 'instituciones', component: InstitucionesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }), CommonModule
  ],
  exports: [
    RouterModule
  ]


})
export class AppRoutingModule { }
