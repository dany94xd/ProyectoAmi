import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { OpcionesmenusComponent } from './components/opcionesmenus/opcionesmenus.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    OpcionesmenusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component:EmployeeComponent
      },
      {
        path: 'opcionesmenu',
        component:OpcionesmenusComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
