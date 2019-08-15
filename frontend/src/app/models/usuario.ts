export class Usuario{

    constructor(_id = '', user = '', idPersona = '',  idRol = '',idLogros = '',idInstitucion = '', matricula = '', NroBotellas = 0 ,saldoActual = 0, saldoVerde = 0, Urlfoto = '',email = '', password= '', accesToken = '', expiresIn = 0 ) {
        this._id = _id;
        this.user = user;
        this.idRol = idRol;
        this.idPersona = idPersona;
        this.idLogros = idLogros;
        this.idInstitucion = idInstitucion;
        this.matricula = matricula;
        this.NroBotellas = NroBotellas;
        this.saldoActual = saldoActual;
        this.saldoVerde = saldoVerde;
        this.Urlfoto = Urlfoto;
        this.email = email;
        this.password = password;
        this.accesToken = accesToken;
        this.expiresIn = expiresIn;
    }
    _id: string;
    user:string;
    idRol:string;
    idPersona:string;
    idLogros:string;
    idInstitucion:string;
    matricula:string;
    NroBotellas:number;
    saldoActual:number;
    saldoVerde:number;
    Urlfoto:string;
    email:string;
    password: string;
    accesToken:string;
    expiresIn:number;
}