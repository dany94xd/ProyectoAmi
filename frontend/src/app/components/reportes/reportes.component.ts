import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ReportesService } from '../../services/reportes/reportes.service';
import { Reportes } from 'src/app/models/reportes'

declare var M: any;

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']


})
export class ReportesComponent implements OnInit {

  constructor(public reportesService: ReportesService) { }

  ngOnInit() {
    this.getReportes();
  }

  public addReportes(form?: NgForm){
    if(form.value._id){
      this.reportesService.putReportes(form.value).subscribe(res => {
        this.resetForm(form);
        this.getReportes();
        M.toast({html: 'Reporte Actualizado'});
      });  
    }else {
      this.reportesService.postReportes(form.value).subscribe(res => {
        this.getReportes();
        this.resetForm(form);
        M.toast({html: 'Se agrego un reporte'});
      });
    }
    
  }

  getReportes(){
    this.reportesService.getReportes().subscribe(res => {
      this.reportesService.reportes = res as Reportes[];
      console.log(res);
    });
  }

  deleteReportes(_id: string, form: NgForm){
    if(confirm("Desea eliminar el reporte?")){
      this.reportesService.deleteReportes(_id).subscribe(res => {
        this.getReportes();
        this.resetForm();
        M.toast({html: 'reporte eliminado'});
      });
    }
  }
  editReportes(reportes: Reportes, form: NgForm){
    this.reportesService.selectedReportes = reportes;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.reportesService.selectedReportes = new Reportes();
    }
  }
}
