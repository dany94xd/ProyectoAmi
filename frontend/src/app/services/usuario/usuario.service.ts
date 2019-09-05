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
  readonly URL_API_SALDO = 'http://162.212.130.145:3002/api/usuarios/webdata';
  

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
    console.log("update")
    console.log(usuario)
   
    return this.http.put(this.URL_API +  `/${usuario._id}`, usuario);

  }

  registrarusuario(usuario: Usuario){
    return this.http.post(this.URL_API, usuario)
  }

 
  deleteUsuario(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`)
  }


  getUsuarioById(personaId: string){
    return this.http.get(this.URL_API + `/${personaId}`)


}

putBotellasUsuario(id_usuario, numeroBotella: number, saldoActual: number, saldoVerde: number){
  return this.http.put(this.URL_API_SALDO + `/${id_usuario}`, {
    NroBotellas: numeroBotella,
    saldoActual: saldoActual,
    saldoVerde: saldoVerde
  })
}


putBotellasRango(id_usuario, numeroBotella: number, saldoActual: number, saldoVerde: number){
  return this.http.put(this.URL_API + `/${id_usuario}`, {
    NroBotellas: numeroBotella,
  
  })
}

}