import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EspolService {

  API_URI = 'http://162.212.130.145:3004/api/espol';
  
  constructor(private http: HttpClient) { 

  }
  getEspol(){
    return this.http.get(this.API_URI);
  }
}
