export class Logros {



    constructor(_id = '', idLogro = '', idInstitucion = '', nombre = '',descripcion = '', minbotella = 0, maxbotella = 0) {
        this._id = _id;
        this.idLogro = idLogro;
        this.idInstitucion = idInstitucion;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.minbotella = minbotella;
        this.maxbotella = maxbotella;
    }
    _id: string;
    idLogro: string;
    idInstitucion: string;
    nombre: string;
    descripcion: string;
    minbotella: Number;
    maxbotella: Number;
}

