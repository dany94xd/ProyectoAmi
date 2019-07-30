export class Reportes {

    constructor(_id = '', idReporte = '', idInstitucion = '', fecha='' , NumBotellas = 0) {
        this._id = _id;
        this.idReporte = idReporte;
        this.idInstitucion= idInstitucion;
        this.fecha = fecha;
        this.NumBotellas = NumBotellas;
  
    }
    _id: string;
    idReporte: string;
    idInstitucion: string;
    fecha: string;
    NumBotellas: Number;
   


}
