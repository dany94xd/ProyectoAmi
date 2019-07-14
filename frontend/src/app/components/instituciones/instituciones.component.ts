import { Component, OnInit } from '@angular/core';
import { InstitucionesService } from 'src/app/services/instituciones/instituciones.service';
import { Institucion } from '../../models/institucion';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';

declare var M: any;

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.css']
})

export class InstitucionesComponent implements OnInit {
  
  constructor( public serviceInstitucion: InstitucionesService ) { }

  ngOnInit() {
    this.getInstitucion();
  }


  public getInstitucion(){
    this.serviceInstitucion.getInstitucion().subscribe(res=> {
      this.serviceInstitucion.instituciones = res as Institucion[];
    });
  }

  public addInstitucion(form?: NgForm){
    if(form.value._id){
      this.serviceInstitucion.putInstitucion(form.value).subscribe(res => {
        this.resetForm(form);
        this.getInstitucion();
        M.toast({html: 'Institucion Actualizada'});
      });  
    }else {
      this.serviceInstitucion.postInstitucion(form.value).subscribe(res => {
        this.getInstitucion();
        this.resetForm(form);
        M.toast({html: 'Se agrego una institucion'});
      });
    }
    
  }

 deleteIntitucion(_id: string, form: NgForm){
  if(confirm('¿Esta seguro de eliminar?')) {
    this.serviceInstitucion.deleteInstitucion(_id).subscribe(res => {
      this.getInstitucion();
      this.resetForm(form);
      M.toast({html: 'Se elimino un usuario'})
   })
  }
   
 } 

 editInstitucion(institucion: Institucion, form: NgForm){
   this.serviceInstitucion.selectInstitucion = institucion;
 }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.serviceInstitucion.selectInstitucion = new Institucion();
    }
  }
}
