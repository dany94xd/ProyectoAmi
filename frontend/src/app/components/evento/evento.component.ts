import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventoService } from '../../services/evento/evento.service';
import { Evento } from 'src/app/models/evento'

declare var M: any;
@Component({
  selector: 'datepicker-overview-app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.scss']
})
export class EventoComponent implements OnInit {

  constructor(public eventoService: EventoService) { }

  ngOnInit() {
    this.getEvento();
  }

  public addEvento(form?: NgForm){
    if(form.value._id){
      this.eventoService.putEvento(form.value).subscribe(res => {
        this.resetForm(form);
        this.getEvento();
    
      });  
    }else {
      this.eventoService.postEvento(form.value).subscribe(res => {
        this.getEvento();
        this.resetForm(form);
     
      });
    }
    
  }


  getEvento(){
    this.eventoService.getEvento().subscribe(res => {
      this.eventoService.evento = res as Evento[];
      console.log(res);
    });
  }

  deleteEvento(_id: string, form: NgForm){
    if(confirm("Desea eliminar el evento?")){
      this.eventoService.deleteEvento(_id).subscribe(res => {
        this.getEvento();
        this.resetForm();
        M.toast({html: 'evento eliminado'});
      });
    }
  }
  editEvento(evento: Evento, form: NgForm){
    this.eventoService.selectedEvento = evento;
  }
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.eventoService.selectedEvento = new Evento();
    }
  }
}
