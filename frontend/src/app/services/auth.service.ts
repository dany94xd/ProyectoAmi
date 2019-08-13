import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UsuariosI} from '../models/usuarios';
import {JwtI} from '../models/jwt';
import {tap} from 'rxjs/operators'; // operador ver que hace??
import {Observable , BehaviorSubject} from 'rxjs'; // observable para que ???


@Injectable(//{
 // providedIn: 'root'
//}
)


export class AuthService {

  AUTH_SERVER: string = 'http://localhost:3000';
  authSubject = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }


//metodo login
login(user: UsuariosI): Observable<JwtI>{
  return this.httpClient.post<JwtI>(`${this.AUTH_SERVER}/login`,user).pipe(tap(
    (res:JwtI)=>{
      if(res){
        //guardar token
        this.saveToken(res.dataUser.accesToken,res.dataUser.expiresIn)
      }
    })
  );

}


//logoaut
logout():void{
  this.token="";
  localStorage.removeItem("ACCESS_TOKEN");
   localStorage.removeItem("EXPIRES_IN");
}

//metodo privado que guarda el token
private saveToken (token:string,expiresIn:string):void{
  localStorage.setItem("ACCES_TOKEN",token);
  localStorage.setItem("EXPIRES_IN",expiresIn);
  this.token=token;
}


//metodo privado que recibe el token
private getToken():string{
  if(!this.token){
    this.token = localStorage.getItem("ACCESS_TOKEN");
  }
  return this.token;
}

}
