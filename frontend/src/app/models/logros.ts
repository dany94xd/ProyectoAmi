export class Logros {



    constructor(_id = '', idLogro = '', idInstitucion = '', nombre = '',descripcion = '', minBotellas = 0, maxBotellas = 0) {
        this._id = _id;
        this.idLogro = idLogro;
        this.idInstitucion = idInstitucion;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.minBotellas = minBotellas;
        this.maxBotellas = maxBotellas;
    }
    _id: string;
    idLogro: string;
    idInstitucion: string;
    nombre: string;
    descripcion: string;
    minBotellas: Number;
    maxBotellas: Number;
}

