import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EspolListComponent } from './components/espol-list/espol-list.component';
import { FormComponent } from './components/form/form.component'
const routes: Routes = [
    {
      path: '',
      redirectTo:'/espol',
      pathMatch:'full'
    },
    {
      path:'espol',
      component: EspolListComponent 
    },
    {
      path:'form',
      component: FormComponent 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
