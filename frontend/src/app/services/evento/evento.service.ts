import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Evento} from '../../models/evento';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  selectedEvento: Evento;
  evento: Evento[];
  
 readonly URL_API = 'http://162.212.130.145:3002/api/eventos';
  

  constructor(public http: HttpClient) {
    this.selectedEvento = new Evento();
  }

  postEvento(evento: Evento) {
    return this.http.post(this.URL_API, evento);
  }

  getEvento() {
    return this.http.get(this.URL_API);
  }

  putEvento(evento: Evento) {
    return this.http.put(this.URL_API + `/${evento._id}`, evento);
  }

  deleteEvento(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
