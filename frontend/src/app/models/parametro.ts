export class Parametro {

    constructor(_id = '',  idParametro = '', nombreParametro = '', valor = '') {
        this._id = _id;
        this.idParametro = idParametro;
        this.nombreParametro = nombreParametro;
        this.valor = valor;
        
    }

    _id: string;
    idParametro: string;
    nombreParametro: string;
    valor: string;

}
