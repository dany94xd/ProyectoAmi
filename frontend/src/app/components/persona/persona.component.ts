import { Component, OnInit } from '@angular/core';

import { Persona } from 'src/app/models/persona';
import { NgForm } from '@angular/forms';
import { PersonasService } from 'src/app/services/personas/personas.service';

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

}
