export class Reportes {

    constructor(_id = '', idReporte = '', idInstitucion = '', fecha='' , numBotellas = 0) {
        this._id = _id;
        this.idReporte = idReporte;
        this.idInstitucion= idInstitucion;
        this.fecha = fecha;
        this.numBotellas = numBotellas;
  
    }
    _id: string;
    idReporte: string;
    idInstitucion: string;
    fecha: string;
    numBotellas: Number;
   


}
