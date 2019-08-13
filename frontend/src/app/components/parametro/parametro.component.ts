
import { Component, OnInit } from '@angular/core';
import { ParametroService } from 'src/app/services/parametro/parametro.service';
import { Parametro } from '../../models/parametro';

import { NgForm } from '@angular/forms';


declare var M: any;

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.scss']
})
export class ParametroComponent implements OnInit {

 
  constructor(public parametrosService: ParametroService) { }

  ngOnInit() {
    this.getParametros();
  }

  public addParametros(form?: NgForm){
    if(form.value._id){
      this.parametrosService.putParametros(form.value).subscribe(res => {
        this.resetForm(form);
        this.getParametros();
    
      });  
    }else {
      this.parametrosService.postParametros(form.value).subscribe(res => {
        this.getParametros();
        this.resetForm(form);
   
      });
    }
    
  }

  getParametros(){
    this.parametrosService.getParametros().subscribe(res => {
      this.parametrosService.parametro = res as Parametro[];
      console.log(res);
    });
  }

  deleteParametros(_id: string, form: NgForm){
    if(confirm("Desea eliminar el reporte?")){
      this.parametrosService.deleteParametros(_id).subscribe(res => {
        this.getParametros();
        this.resetForm();
  
      });
    }
  }
  editParametros(parametro: Parametro, form: NgForm){
    this.parametrosService.selectedParametros = parametro;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.parametrosService.selectedParametros = new Parametro();
    }
  }

}
