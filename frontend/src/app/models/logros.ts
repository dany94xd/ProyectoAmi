export class Logros {



    constructor(_id = '', idLogro = 0, idInstitucion = 0, nombre = '', minBotellas = 0, maxBotellas = 0) {
        this._id = _id;
        this.idLogro = idLogro;
        this.idInstitucion = idInstitucion;
        this.nombre = nombre;
        this.minBotellas = minBotellas;
        this.maxBotellas = maxBotellas;
    }
    _id: string;
    idLogro: Number;
    idInstitucion: Number;
    nombre: string;
    minBotellas: Number;
    maxBotellas: Number;
}
