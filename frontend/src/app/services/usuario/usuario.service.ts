import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Persona } from '../../models/persona';


import { Usuario } from '../../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  selectPersona: Persona;
  personas: Persona[];





  selectUsuario: Usuario;
  usuario: Usuario[];
  readonly URL_API = 'http://162.212.130.145:3002/api/usuarios';

  constructor(public http: HttpClient) { 
    this.selectUsuario = new Usuario();

}

  postUsuario(usuario: Usuario){
    return this.http.post(this.URL_API, usuario);
7
  }

  getUsuario(){
    return this.http.get(this.URL_API);

    console.log(this.selectPersona.idPersona + "dfsdfes");
  }


 


  putUsuario(usuario: Usuario){
    return this.http.put(this.URL_API +  `/${usuario._id}`, usuario);

  }

 
  deleteUsuario(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }


  getUsuarioById(personaId: string){
    return this.http.get(this.URL_API + `/${personaId}`)


}
  }