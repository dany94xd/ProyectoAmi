import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import {Logros} from '../../models/logros'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogrosService {

  selectedLogros: Logros;
  logro: Logros[];
  
 readonly URL_API = 'http://162.212.130.145/api/logros';
  

  constructor(public http: HttpClient) {
    this.selectedLogros = new Logros();
  }

  postLogros(logro: Logros) {
    return this.http.post(this.URL_API, logro);
  }

  getLogros() {
    return this.http.get(this.URL_API);
  }

  putLogros(logro: Logros) {
    return this.http.put(this.URL_API + `/${logro._id}`, logro);
  }

  deleteLogros(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
