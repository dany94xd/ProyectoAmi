import { Injectable } from '@angular/core';
import { Institucion } from '../../models/institucion';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InstitucionesService {
  selectInstitucion: Institucion;
  instituciones: Institucion[];

  readonly URL_API = 'http://162.212.130.145:3002/api/instituciones';


  constructor(public http: HttpClient) { 
    this.selectInstitucion = new Institucion();
  }

  postInstitucion(institucion: Institucion){
    return this.http.post(this.URL_API, institucion);
  }

  getInstitucion(){
    return this.http.get(this.URL_API);
  }

  putInstitucion(institucion: Institucion){
    return this.http.put(this.URL_API + `/${institucion._id}`, institucion);
  }

  deleteInstitucion(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
