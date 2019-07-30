export class Evento {

    constructor(_id = '', idInstitucion = '', idLogro = '', descripcion='' , fechainicio='' , fechafin='', urlfoto='', premios='') {
        this._id = _id;
        this.idInstitucion = idInstitucion;
        this.idLogro= idLogro;
        this.descripcion = descripcion;
        this.fechainicio = fechainicio;
        this.fechafin=fechafin;
        this.urlfoto=urlfoto;
        this.premios=premios;
  
    }

    _id: string;
  idInstitucion: string;
    idLogro:string;
    descripcion: string;
    fechainicio: string;
    fechafin:string;
    urlfoto:string;
    premios:string;
   
}
