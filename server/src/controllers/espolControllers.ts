import { Request, Response } from 'express';
import pool from '../database'

class EspolControllers{

    public async list (req:Request, res:Response){
        const espol= await pool.query('select usuario.id_persona, usuario.identificacion, persona.cedula, persona.nombres, persona.apellidos from usuario inner join persona on usuario.id_persona=persona.id_persona');
        res.json(espol);  
    } 
    public create (req:Request, res:Response){
        res.json({text:'creating a'});
    }
}
const espolControllers= new EspolControllers();
export default espolControllers;
//ecto, lo he hecho y funciona. ;) Por si ha alguien le puede servir:  "npm i  promise-mysql@3.3.2"
//getone por list, se puede filtrar