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

  constructor(public logrosService: LogrosService) { }

  ngOnInit() {
    this.getLogros();
  }

  addLogros(form: NgForm){
    debugger
    if(form.value._id){
      this.logrosService.putLogros(form.value).subscribe(res => {
        this.getLogros();
      })
    }
  }

  getLogros(){
    this.logrosService.getLogros().subscribe(res => {
      this.logrosService.logro = res as Logros[];
    });
  }

  deleteLogros(_id: string, form: NgForm){
    if(confirm("Desea eliminar el dato?")){
      this.logrosService.deleteLogros(_id).subscribe(res => {
        this.getLogros();
        this.resetForm();
        M.toast({html: 'Logro eliminada'});
      });
    }
  }
  editLogros(logro: Logros, form: NgForm){
    this.logrosService.selectedLogros = logro;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.logrosService.selectedLogros = new Logros();
    }
  }
   
 } 


