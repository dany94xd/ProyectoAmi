import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngresomatriculaService } from '../../../services/ingresomatricula/ingresomatricula.service';

import { Persona } from 'src/app/models/persona';

@Component({
  selector: 'app-ingresomaticula',
  templateUrl: './ingresomaticula.component.html',
  styleUrls: ['./ingresomaticula.component.scss']
})
export class IngresomaticulaComponent implements OnInit {

  constructor(public ingresomatriculaService: IngresomatriculaService) { }

  ngOnInit() {
    this.getPersona();
  }

  public addPersona(form?: NgForm){
    if(form.value._id){
      this.ingresomatriculaService.putPersona(form.value).subscribe(res => {
     
        this.getPersona();
    
      });  
    }else {
      this.ingresomatriculaService.postPersona(form.value).subscribe(res => {
        this.getPersona();
      
     
      });
    }
    
  }


  getPersona(){
    this.ingresomatriculaService.getPersona().subscribe(res => {
      this.ingresomatriculaService.persona = res as Persona[];
      console.log(res);
    });
  }


  editPersona(personas: Persona, form: NgForm){
    this.ingresomatriculaService.selectedPersona = personas;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.ingresomatriculaService.selectedPersona= new Persona();
    }
  }

}
