import { Component, OnInit } from '@angular/core';

import { Persona } from 'src/app/models/persona';
import { NgForm } from '@angular/forms';
import { PersonasService } from 'src/app/services/personas/personas.service';

declare var M: any;

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  constructor(public personaService: PersonasService) { }

  ngOnInit() {
    this.getPersona();
  }

  addPersona(form: NgForm){
    if(form.value._id){
      this.personaService.putPersona(form.value).subscribe(res => {
        this.getPersona();
      })
    }
  }

  getPersona(){
    this.personaService.getPersona().subscribe(res => {
      this.personaService.personas = res as Persona[];
    });
  }

  deletePersona(_id: string, form: NgForm){
    if(confirm("Desea eliminar el dato?")){
      this.personaService.deletePersona(_id).subscribe(res => {
        this.getPersona();
        this.resetForm();
        M.toast({html: 'Persona eliminada'});
      });
    }
  }
  editPersona(persona: Persona, form: NgForm){
    this.personaService.selectPersona = persona;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.personaService.selectPersona = new Persona();
    }
  }

}
