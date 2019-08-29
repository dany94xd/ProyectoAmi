import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EspolService {

  API_URI = 'http://localhost:3000/api/espol';
  
  constructor(private http: HttpClient) { 

  }
  getEspol(){
    return this.http.get(this.API_URI);
  }
}
