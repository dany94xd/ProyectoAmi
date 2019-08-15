import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from} from 'rxjs';
import { _appIdRandomProviderFactory } from '@angular/core/src/application_tokens';
import { _ } from 'core-js';
@Injectable({
  providedIn: 'root'
})
export class IngresomatriculaService {


  
 readonly URL_API = 'http://162.212.130.145/api/webapp/data';

  constructor(public http: HttpClient) {}

  getUsuarioByMatricula(matricula:string){

    let headers = new HttpHeaders();
headers.set('Accept', 'application/json');
headers.set('Content-Type', 'application/json');
headers.set('Access-Control-Allow-Origin', '*');

return this.http.get(this.URL_API + `/${matricula}`)

  }


 
}
