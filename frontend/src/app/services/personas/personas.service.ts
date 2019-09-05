import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../models/persona';


@Injectable({
  providedIn: 'root'
})
export class PersonasService {

 selectPersona: Persona;
  personas: Persona[];
  readonly URL_API = 'http://162.212.130.145:3002/api/personas';
  readonly URL_API_2 = 'http://162.212.130.145/api/webapp/persona'

  constructor(public http: HttpClient) { 
    this.selectPersona = new Persona();
  }


  getPersonaByCedula(cedula: string){
    return this.http.get(this.URL_API_2 + `/${cedula}`)
  }

  postPersona(personas: Persona){
    return this.http.post(this.URL_API, personas);
  }

  getPersona(){
    return this.http.get(this.URL_API);
    console.log(this.selectPersona.idPersona + "dfsdfes");
  }


  putPersona(personas: Persona){
    return this.http.put(this.URL_API +  `/${personas._id}`, personas);
  }

 
  deletePersona(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }

  getPersonaById(personaId: string){
    return this.http.get(this.URL_API + `/${personaId}`)
  }

 

}
