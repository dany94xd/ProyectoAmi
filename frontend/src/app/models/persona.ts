export class Persona {

    constructor(_id = '', idPersona = 0, idInstitucion = 0, cedula = '', nombre = '', apellido = '', matricula='') {
        this._id = _id;
        this.idPersona = idPersona;
        this.idInstitucion = idInstitucion;
   this.matricula=matricula;
        this.cedula = cedula;
        this.nombre = nombre;
      this.apellido= apellido;
  
        
     
    
    }
    _id: string;
    idPersona: Number;
    idInstitucion: Number;
matricula: string;
    cedula: string;
    nombre: string;
    apellido: string;
   
  
}