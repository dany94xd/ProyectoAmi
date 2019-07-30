import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Reportes} from '../../models/reportes'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  
  readonly URL_API = 'http://162.212.130.145:3002/api/reportes';
  
  selectedReportes: Reportes;
  reportes: Reportes[];

  constructor(public http: HttpClient) {
    this.selectedReportes = new Reportes();
  }

  postReportes(reportes: Reportes){
    return this.http.post(this.URL_API, reportes);
  }

  putReportes(reportes: Reportes){
    return this.http.put(this.URL_API +  `/${reportes._id}`, reportes);
  }

  getReportes(){
    return this.http.get(this.URL_API);
  }

  deleteReportes(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
