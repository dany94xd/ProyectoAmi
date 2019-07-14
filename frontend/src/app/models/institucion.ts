export class Institucion {

    constructor(_id = '', idInstitucion = '', nombre = '', ruc = '', descripcion = '') {
        this._id = _id;
        this.idInstitucion = idInstitucion;
        this.nombre = nombre;
        this.ruc = ruc;
        this.descripcion = descripcion;
    }

    _id: string;
    idInstitucion: string;
    nombre: string;
    ruc: string;
    descripcion: string;
}
