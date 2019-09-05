import { Injectable } from '@angular/core';
import { HttpClient}  from '@angular/common/http';
import { Persona } from '../models/Persona';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
  //URL_API = 'http://localhost:6100/api/personas';
  URL_API = 'http://162.212.130.145:3000/api/personas';

  
  constructor(private http: HttpClient) { 
  }
  getPersona(){
    return this.http.get(this.URL_API);
  }
  postPersona(Persona: Persona){
    return this.http.post(this.URL_API, Persona);
  }
}
