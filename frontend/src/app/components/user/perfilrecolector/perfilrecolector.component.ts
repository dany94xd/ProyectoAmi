import { Component, OnInit } from '@angular/core';

import { PersonasService } from '../../../services/personas/personas.service';
import {PersonaComponent} from 'src/app/components/persona/persona.component';
import { Persona } from '../../../models/persona';

import { NgForm } from '@angular/forms';




@Component({
  selector: 'app-perfilrecolector',
  templateUrl: './perfilrecolector.component.html',
  styleUrls: ['./perfilrecolector.component.css']
})
export class PerfilrecolectorComponent implements OnInit {
public personaPorMatricula: any;
public usuarioPorMatricula: any;
 
  constructor(public personaService: PersonasService) { }

  ngOnInit() {
    let datoPorMatricula = JSON.parse(localStorage.getItem("estudainteMatricula"))
    
    this.personaPorMatricula = datoPorMatricula[0][0];
    this.usuarioPorMatricula = datoPorMatricula[1][0];
    console.log(this.personaPorMatricula)
    console.log(this.usuarioPorMatricula)
  }
  

  

  public addPersona(form?: NgForm){
    if(form.value._id){
      this.personaService.putPersona(form.value).subscribe(res => {
     
        this.getPersona();
    
      });  
    }else {
      this.personaService.postPersona(form.value).subscribe(res => {
        this.getPersona();
      
     
      });
    }
    
  }



  getPersona(){
    this.personaService.getPersona().subscribe(res => {
      this.personaService.personas = res as Persona[];
      console.log(res);
    });
  }





}
