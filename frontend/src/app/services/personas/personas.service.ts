import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../models/persona';
import { Institucion } from 'src/app/models/institucion';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  readonly URL_API = 'http://162.212.130.145:3002/api/personas';

  selectPersona: Persona
  personas: Persona[];

  constructor(public http: HttpClient) { 
    this.selectPersona = new Persona();
  }

  postPersona(persona: Persona){
    return this.http.post(this.URL_API, persona);
  }

  putPersona(persona: Institucion){
    return this.http.put(this.URL_API +  `/${persona._id}`, persona);
  }

  getPersona(){
    return this.http.get(this.URL_API);
  }

  deletePersona(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }
}
