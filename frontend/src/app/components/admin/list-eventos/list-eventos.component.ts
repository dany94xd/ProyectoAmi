import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service';
import{EventoInterface} from '../../../models/evento-interface';
import{NgForm} from '@angular/forms';

@Component({
  selector: 'app-list-eventos',
  templateUrl: './list-eventos.component.html',
  styleUrls: ['./list-eventos.component.css']
})
export class ListEventosComponent implements OnInit {
  constructor(private dataApiService: DataApiService) { }
  private eventos: EventoInterface;
  pageActual: number = 1;
  public myCounter: number = 0;
  ngOnInit() {
    this.getListEventos();
  }

  getListEventos(): void {
    this.dataApiService
      .getAllEventos()
      .subscribe((eventos: EventoInterface) => (this.eventos = eventos));
  }

  onDeleteEvento(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataApiService.deleteEvento(id).subscribe();
    }
  }

  onPreUpdateEvento(evento: EventoInterface): void {
    this.dataApiService.selectedEvento = Object.assign({}, evento);
  }

  resetForm(eventoForm?: NgForm): void {
    this.dataApiService.selectedEvento = {
      id: null,
      titulo:'',
      fecha:'',
      hora:'',
      descripcion:'',
      portada:'',
      precio:'',
      estado:'',
      caracter:'',
      idevento:'',
      idrecinto:''
    };
  }

}
