import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { EspolListComponent } from './components/espol-list/espol-list.component';
import { FormComponent } from './components/form/form.component';
import { EspolService } from './components/servicios/espol.service'
import { HttpClientModule}  from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    EspolListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EspolService],
  bootstrap: [AppComponent]
})
export class AppModule { }
