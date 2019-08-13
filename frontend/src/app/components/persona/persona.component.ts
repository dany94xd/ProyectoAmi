import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { PersonasService } from '../../services/personas/personas.service';

import { Persona } from 'src/app/models/persona';
declare var M: any;

@Component({
  selector: 'datepicker-overview-app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(public personaService: PersonasService) { }

  ngOnInit() {
    this.getPersona();
  }



  public addPersona(form?: NgForm){
    if(form.value._id){
      this.personaService.putPersona(form.value).subscribe(res => {
        this.resetForm(form);
        this.getPersona();
    
      });  
    }else {
      this.personaService.postPersona(form.value).subscribe(res => {
        this.getPersona();
        this.resetForm(form);
     
      });
    }
    
  }


  getPersona(){
    this.personaService.getPersona().subscribe(res => {
      this.personaService.personas = res as Persona[];
      console.log(res);
    });
  }

  deletePersona(_id: string, form: NgForm){
    if(confirm("Desea eliminar el evento?")){
      this.personaService.deletePersona(_id).subscribe(res => {
        this.getPersona();
        this.resetForm();
     
      });
    }
  }
  editPersona(personas: Persona, form: NgForm){
    this.personaService.selectPersona = personas;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.personaService.selectPersona = new Persona();
    }
  }

}
