import { Injectable } from '@angular/core';


import { HttpClient } from '@angular/common/http';

import {Logros} from '../../models/logros'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogrosService {

  selectedLogros: Logros;
  logros: Logros[];
  
 readonly URL_API = 'http://162.212.130.145:3000/api/Logros';
  

  constructor(public http: HttpClient) {
    this.selectedLogros = new Logros();
  }

  postLogros(logros: Logros) {
    return this.http.post(this.URL_API, logros);
  }

  getLogros() {
    return this.http.get(this.URL_API);
  }

  putLogros(logros: Logros) {
    return this.http.put(this.URL_API + `/${logros._id}`, logros);
  }

  deleteLogros(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
