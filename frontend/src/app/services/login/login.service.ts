import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  readonly URL_API = 'http://162.212.130.145:3002/api/usuarios/login';

  constructor(public http: HttpClient) { }

  login(user: string, clave: string){

    let headers = new HttpHeaders();
    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    headers.set('Access-Control-Allow-Origin', '*');

    return this.http.post(this.URL_API, {
      user: user,
      password: clave
    }, {headers: headers})
  }

}


