export class Reportes {

    constructor(_id = '', idReporte = '', idInstitucion = '', fecha='' , NroBotellas = 0) {
        this._id = _id;
        this.idReporte = idReporte;
        this.idInstitucion= idInstitucion;
        this.fecha = fecha;
        this.NroBotellas = NroBotellas;
  
    }
    _id: string;
    idReporte: string;
    idInstitucion: string;
    fecha: string;
    NroBotellas: Number;
   


}
