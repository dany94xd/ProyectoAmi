import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IngresomatriculaService } from '../../../services/ingresomatricula/ingresomatricula.service';

import { Persona } from 'src/app/models/persona';
import { Router } from '@angular/router';
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
        let matriculaingresada= JSON.stringify(res);
        
        console.log(matriculaingresada);
        localStorage.setItem("estudainteMatricula", matriculaingresada);

        this.router.navigate(["user/perfilrecolector"])
      }
    })
  }
 

}
