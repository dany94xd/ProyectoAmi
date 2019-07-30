import { Component, OnInit } from '@angular/core';
import { LogrosService } from 'src/app/services/logros/logros.service';
import { Logros } from '../../models/logros';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';

declare var M: any;

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css']
})
export class LogrosComponent implements OnInit {

  constructor( public serviceLogros: LogrosService ) { }

  ngOnInit() {
    this.getLogros();
  }


  public getLogros(){
    this.serviceLogros.getLogros().subscribe(res=> {
      this.serviceLogros.logros = res as Logros[];
    });
  }

  public addLogros(form?: NgForm){
    if(form.value._id){
      this.serviceLogros.putLogros(form.value).subscribe(res => {
        this.resetForm(form);
        this.getLogros();
        M.toast({html: 'Logros Actualizado'});
      });  
    }else {
      this.serviceLogros.postLogros(form.value).subscribe(res => {
        this.getLogros();
        this.resetForm(form);
        M.toast({html: 'Se agrego un Logros'});
      });
    }
    
  }

 deleteLogros(_id: string, form: NgForm){
  if(confirm('¿Esta seguro de eliminar?')) {
    this.serviceLogros.deleteLogros(_id).subscribe(res => {
      this.getLogros();
      this.resetForm(form);
      M.toast({html: 'Se elimino un Logros'})
   })
  }
   
 } 

 editLogros(logros: Logros, form: NgForm){
   this.serviceLogros.selectedLogros = logros;
 }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.serviceLogros.selectedLogros = new Logros();
    }
  }
}
