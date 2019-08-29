import { Component, OnInit } from '@angular/core';
import { EspolService } from '../servicios/espol.service';
import { PersonaService } from '../servicios/persona.service';
import { Persona } from '../models/Persona';


@Component({
  selector: 'app-espol-list',
  templateUrl: './espol-list.component.html',
  styleUrls: ['./espol-list.component.css']
})
export class EspolListComponent implements OnInit {
  espols:any = [];
  muchos:any=[];
  constructor(private espolService: EspolService, private personaService:PersonaService) { }

  ngOnInit() {
    this.getSQlBase();
  }
  getSQlBase(){
    this.espolService.getEspol().subscribe(
      res=> {
        this.espols = res;
        console.log("Base de Datos de ESPOL");
        console.log(this.espols);
      },
      err=> console.error(err)
      );
  }
  migrarEspol(){
   //alert("Migrando base de datos");
   console.log("Comenzando Migración");
   /*this.personaService.postPersona(this.espols);
   */
   for (var perso of this.espols) {
    /*console.log(perso);
    this.personaService.postPersona(perso);*/
    var juguete: Persona={
      identificacion:perso.identificacion,
      cedula: perso.cedula,
      nombre: perso.nombre,
      apellido: perso.apellido
    }
    console.log(juguete);
    
    this.personaService.postPersona(juguete)
    .subscribe(res=> {
    });
  }
   console.log("Migración completa");
  } 


}
