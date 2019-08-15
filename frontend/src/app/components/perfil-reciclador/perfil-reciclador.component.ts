import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../services/personas/personas.service';
import {PersonaComponent} from 'src/app/components/persona/persona.component';
import { Persona } from '../../models/persona';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-perfil-reciclador',
  templateUrl: './perfil-reciclador.component.html',
  styleUrls: ['./perfil-reciclador.component.css']
})



export class PerfilRecicladorComponent implements OnInit {
  public usuarioEnSesion: any
  public personaEnSesion: any

  constructor(public personaService: PersonasService, private personaServicio: PersonasService, private router: Router) { }

  ngOnInit() {
    this.personaEnSesion = JSON.parse(localStorage.getItem("currentuser"));
    console.log(this.personaEnSesion.idPersona);
  
    this.personaService.getPersonaById(this.personaEnSesion.idPersona).subscribe(res =>{
      this.usuarioEnSesion = res;
      
    })
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

  cerrarSesion(){
    localStorage.removeItem('currentuser');
    
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
