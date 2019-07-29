
import { Component, OnInit } from '@angular/core';
import { ParametroService } from 'src/app/services/parametro/parametro.service';
import { Parametro } from '../../models/parametro';

import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';

declare var M: any;

@Component({
  selector: 'app-parametro',
  templateUrl: './parametro.component.html',
  styleUrls: ['./parametro.component.scss']
})
export class ParametroComponent implements OnInit {

 
  constructor( public serviceParametro: ParametroService ) { }


  ngOnInit() {
    this.getParametro();
  }

  public getParametro(){
    this.serviceParametro.getParametro().subscribe(res=> {
      this.serviceParametro.parametro = res as Parametro[];
      console.log(this.serviceParametro);
    });
  }

  public addParametro(form?: NgForm){
    if(form.value._id){
      this.serviceParametro.putParametro(form.value).subscribe(res => {
        this.resetForm(form);
        this.getParametro();
        M.toast({html: 'Parametro Actualizado'});
      });  
    }else {
      this.serviceParametro.postParametro(form.value).subscribe(res => {
        this.getParametro();
        this.resetForm(form);
        M.toast({html: 'Se agrego un parametro'});
      });
    }
    
  }

 deleteParametro(_id: string, form: NgForm){
  if(confirm('¿Esta seguro de eliminar?')) {
    this.serviceParametro.deleteParametro(_id).subscribe(res => {
      this.getParametro();
      this.resetForm(form);
      M.toast({html: 'Se elimino un parametro'})
   })
  }
   
 } 

 editParametro(parametro: Parametro, form: NgForm){
   this.serviceParametro.selectedParametro = parametro;
 }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.serviceParametro.selectedParametro = new Parametro();
    }
  }


}
