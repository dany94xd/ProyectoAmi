import { Component, OnInit } from '@angular/core';

import { PersonasService } from '../../../services/personas/personas.service';
import {PersonaComponent} from 'src/app/components/persona/persona.component';
import { Persona } from '../../../models/persona';

import { NgForm } from '@angular/forms';

import { UsuarioService } from 'src/app/services/usuario/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { ConstantPool } from '@angular/compiler';




@Component({
  selector: 'app-perfilrecolector',
  templateUrl: './perfilrecolector.component.html',
  styleUrls: ['./perfilrecolector.component.css']
})


export class PerfilrecolectorComponent implements OnInit {
  public personaById: Persona
  public personaPorMatricula: any;
  public usuarioPorMatricula: any;
  public datoPorMatricula: any;
  public correoUsuario: HTMLElement;
  public usuarioById: Usuario;


  //Displays
  public displayName: string
  public displayLastname: string
  public displayEmail: string
  public displaysaldoVerde: number
  public displaySaldoAcutal: number
  public displayNroBotellas: number

    constructor(public personaService: PersonasService, private serviciousuario: UsuarioService, private servicioPersona: PersonasService) {
      this.personaById = new Persona();
      

     }
ngOnInit() {
  this.datoPorMatricula = JSON.parse(localStorage.getItem("estudainteMatricula"))
  console.log("=====>>>", this.datoPorMatricula);
  this.serviciousuario.getUsuarioById(this.datoPorMatricula._id).subscribe(res => {
    this.usuarioById = res as Usuario;
    console.log( "this.usuarioById");
    console.log( this.usuarioById);
    this.personaService.getPersonaById(this.usuarioById.idPersona).subscribe(persona => {
      this.personaById = persona as Persona;
      this.displayName = this.personaById.nombre;
      this.displayLastname = this.personaById.apellido;
      this.displayEmail = this.usuarioById.email;
      this.displaySaldoAcutal = this.usuarioById.saldoActual;
      this.displaysaldoVerde = this.usuarioById.saldoVerde;
      this.displayNroBotellas = this.usuarioById.NroBotellas;
      console.log(this.personaById);
    })
  })
}

  

  cerrarSesion(){
    localStorage.removeItem('currentuser');
    localStorage.removeItem('currentRol');
    
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


  actualizarSaldo(numeroBotellas: number){
    let saldoActual: number;
    let saldoVerdeActual: number;
    let numeroBotellasActuales: number;
    

      saldoActual= this.usuarioById.saldoActual + (numeroBotellas * 0.02);
      saldoVerdeActual= this.usuarioById.saldoVerde + (numeroBotellas * 0.02);
      numeroBotellasActuales = this.usuarioById.NroBotellas + + numeroBotellas;
      console.log(saldoActual);
      console.log(saldoVerdeActual);
      console.log(numeroBotellasActuales);


      this.usuarioById.saldoActual = +saldoActual.toFixed(2);
      this.usuarioById.saldoVerde = +saldoVerdeActual.toFixed(2);
      this.usuarioById.NroBotellas = numeroBotellasActuales;

      this.serviciousuario.putBotellasUsuario(this.usuarioById._id, this.usuarioById.NroBotellas, this.usuarioById.saldoActual, this.usuarioById.saldoVerde).subscribe(res => {
        if(res){

          

          console.log("actualizado wueleb icoh")
          console.log(res)
          
          localStorage.setItem("estudainteMatricula", JSON.stringify(this.usuarioById))
          console.log(localStorage.getItem("estudainteMatricula"))
          this.displaySaldoAcutal = this.usuarioById.saldoActual;
          this.displaysaldoVerde = this.usuarioById.saldoVerde;
          this.displayNroBotellas = this.usuarioById.NroBotellas;
         
          alert('se actualizo el usuario');
          numeroBotellas = 0;

        }
      });
    //})
    

  }

  getPersona(){
    this.personaService.getPersona().subscribe(res => {
      this.personaService.personas = res as Persona[];
      console.log(res);
    });
  }





}
