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
  public personaPorMatricula: any;
  public usuarioPorMatricula: any;
  public datoPorMatricula: any;
  public correoUsuario: HTMLElement;
  public usuarioById: Usuario;
    constructor(public personaService: PersonasService, private serviciousuario: UsuarioService) { }
ngOnInit() {
  this.datoPorMatricula = JSON.parse(localStorage.getItem("estudainteMatricula"))
  console.log(localStorage.getItem("estudainteMatricula"))
  this.personaPorMatricula = this.datoPorMatricula[0][0];
  this.usuarioPorMatricula = this.datoPorMatricula[1][0];
  console.log(this.personaPorMatricula);
  console.log(this.usuarioPorMatricula);
  this.serviciousuario.getUsuarioById(this.personaPorMatricula._id).subscribe(res => {
    this.usuarioById = res as Usuario;
    console.log( "this.usuarioById");
    console.log( this.usuarioById);

  })
}

  

  cerrarSesion(){
    localStorage.removeItem('currentuser');
    
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
    let numeroBotellasActuales: number;
    let numeroBotellasVerdes: number;
    

    if(this.personaPorMatricula.saldoActual == 0){
      saldoActual= 0.02 * numeroBotellas;
    }else{
      console.log("else masca bicho")
      saldoActual= this.personaPorMatricula.saldoActual + (numeroBotellas * 0.02);
      console.log(saldoActual)
    }

    numeroBotellasActuales = this.personaPorMatricula.NroBotellas + + numeroBotellas;
    
    console.log(numeroBotellasActuales)
    //console.log(this.personaPorMatricula._id)
    this.serviciousuario.getUsuarioById(this.personaPorMatricula._id).subscribe(res => {
      let usuarioTmp = res as Usuario;
      console.log( usuarioTmp.saldoActual+"+"+saldoActual.toFixed(2))
      usuarioTmp.saldoActual = +saldoActual.toFixed(2);
      console.log("psyco killer")
      console.log( usuarioTmp.saldoActual)
      usuarioTmp.NroBotellas = numeroBotellasActuales;
     // usuarioTmp.saldoActual += +usuarioTmp.saldoVerde.toFixed(2);
    // if(this.personaPorMatricula.saldoVerde == 0){
        //usuarioTmp.saldoVerde=saldoActual;
     
     // }
      
//numeroBotellasVerdes= usuarioTmp.saldoVerde + + numeroBotellas;

      console.log(usuarioTmp.password)
      this.serviciousuario.putUsuario(usuarioTmp).subscribe(res => {
        if(res){
          console.log("actualizado wueleb icoh")
          console.log(res)
          this.personaPorMatricula.saldoActual = +saldoActual.toFixed(2);
          this.personaPorMatricula.NroBotellas = numeroBotellasActuales;
         //this.personaPorMatricula.saldoVerde= +saldoActual.toFixed(2);
          alert('se actualizo el usuario')
        }
      });
    })
    

  }

  getPersona(){
    this.personaService.getPersona().subscribe(res => {
      this.personaService.personas = res as Persona[];
      console.log(res);
    });
  }





}
