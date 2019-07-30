import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Parametro} from '../../models/parametro'

@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  selectedParametro: Parametro;
  parametro: Parametro[];
  
 readonly URL_API = 'http://162.212.130.145:3000/api/parametros';
  

  constructor(public http: HttpClient) {
    this.selectedParametro = new Parametro();
  }

  postParametro(parametro: Parametro) {
    return this.http.post(this.URL_API, parametro);
  }

  getParametro() {
    return this.http.get(this.URL_API);
  }

  putParametro(parametro: Parametro) {
    return this.http.put(this.URL_API + `/${parametro._id}`, parametro);
  }

  deleteParametro(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
