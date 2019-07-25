export class Reportes {

    constructor(_id = '', idReporte = 0, idInstitucion = 0, fecha = '', numBotellas = 0) {
        this._id = _id;
        this.idReporte = idReporte;
        this.fecha = fecha;
        this.numBotellas = numBotellas;
  
    }
    _id: string;
    idReporte: Number;
    idInstitucion: Number;
    fecha: string;
    numBotellas: Number;
   


}
