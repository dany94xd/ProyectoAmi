export class Persona {

    constructor(_id = '', idPersona = 0, idInstitucion = 0, cedula = '', nombre = '', apellido = '') {
        this._id = _id;
        this.idPersona = idPersona;
        this.idInstitucion = idInstitucion;
        this.cedula = cedula;
        this.nombre = nombre;
        this.apellido = apellido;
    }
    _id: string;
    idPersona: Number;
    idInstitucion: Number;
    cedula: string;
    nombre: string;
    apellido: string;
}