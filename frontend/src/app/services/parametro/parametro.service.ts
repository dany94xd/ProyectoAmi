import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Parametro} from '../../models/parametro'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  
 readonly URL_API = 'http://162.212.130.145:3002/api/parametros';
  
 selectedParametros: Parametro;
 parametro: Parametro[];

  constructor(public http: HttpClient) {
    this.selectedParametros = new Parametro();
  }

  postParametros(parametro: Parametro){
    return this.http.post(this.URL_API, parametro);
  }

  putParametros(parametro: Parametro){
    return this.http.put(this.URL_API +  `/${parametro._id}`, parametro);
  }

  getParametros(){
    return this.http.get(this.URL_API);
    console.log(this.selectedParametros.nombreParametro + "dfsdfes");
  }

  deleteParametros(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
