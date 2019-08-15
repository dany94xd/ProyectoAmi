import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../models/persona';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  selectPersona: Persona;
  personas: Persona[];
  readonly URL_API = 'http://162.212.130.145/api/usuarios';

  constructor(public http: HttpClient) { 
    this.selectPersona = new Persona();

}

  postUsuario(personas: Persona){
    return this.http.post(this.URL_API, personas);
  }

  getUsuario(){
    return this.http.get(this.URL_API);
    console.log(this.selectPersona.idPersona + "dfsdfes");
  }


  putUsuario(personas: Persona){
    return this.http.put(this.URL_API +  `/${personas._id}`, personas);
  }

 
  deleteUsuario(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }

  getUsuarioById(personaId: string){
    return this.http.get(this.URL_API + `/${personaId}`)
  }
}
