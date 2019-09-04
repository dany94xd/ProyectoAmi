import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngresomatriculaService } from '../../../services/ingresomatricula/ingresomatricula.service';

import { Persona } from 'src/app/models/persona';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
export interface ingresomatricula{
  idInstitucion: number,
  NroBotellas: number,
  saldoActual: number,
  matricula: string,
  saldoVerde: number,
  nombre: string,
  apellido: string
}




@Component({
  selector: 'app-ingresomaticula',
  templateUrl: './ingresomaticula.component.html',
  styleUrls: ['./ingresomaticula.component.scss']
})
export class IngresomaticulaComponent implements OnInit {

  constructor(public ingresomatriculaService: IngresomatriculaService, public router: Router) { }

  ngOnInit() {
   
  }

  ingresomatricula(matricula: string){
    this.ingresomatriculaService.getUsuarioByMatricula(matricula).subscribe(res=>{
      if(res){
        
        console.log("==> ", res)
        let usuarioTmp = res[0][0] as Usuario
        let personaTmp = res[1][0] as Persona
        console.log("==>>>> ", usuarioTmp)
        console.log("==>>>> ", personaTmp)

        let usuarioIngresado: Usuario = {
          _id: usuarioTmp._id,
          user:usuarioTmp.user,
          idRol:usuarioTmp.idRol,
          idPersona:usuarioTmp.idPersona,
          idLogros:usuarioTmp.idLogros,
          idInstitucion:usuarioTmp.idInstitucion,
          matricula:usuarioTmp.matricula,
          NroBotellas:usuarioTmp.NroBotellas,
          saldoActual:usuarioTmp.saldoActual,
          saldoVerde:usuarioTmp.saldoVerde,
          urlFoto:usuarioTmp.urlFoto,
          email:usuarioTmp.email,
          password: usuarioTmp.password,
          accesToken:usuarioTmp.accesToken,
          expiresIn:usuarioTmp.expiresIn,
        }
        let matriculaingresada= JSON.stringify(usuarioIngresado);
        //console.log("Matricula ingresada");
        //console.log(matriculaingresada);
        localStorage.setItem("estudainteMatricula", matriculaingresada);

        this.router.navigate(["user/perfilrecolector"])
      }
    })
  }
 

}
