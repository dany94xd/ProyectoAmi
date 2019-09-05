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

    public async getOne(req: Request, res: Response): Promise<any> {
        const { id } = req.params;
        const games = await pool.query('select usuario.id_persona, usuario.identificacion, persona.cedula, persona.nombres, persona.apellidos from usuario inner join persona on usuario.id_persona=persona.id_persona WHERE persona.cedula = ?', [id]);
        console.log(games.length);
        if (games.length > 0) {
            return res.json(games[0]);
        }
        res.status(404).json({ text: "La persona no existe" });
    } 

    public async update (req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE persona set ? WHERE id_persona = ?', [req.body, id]);
        res.json({ message: "La persona fue actualizado" });
    }

    
}
const espolControllers= new EspolControllers();
export default espolControllers;
//ecto, lo he hecho y funciona. ;) Por si ha alguien le puede servir:  "npm i  promise-mysql@3.3.2"
//getone por list, se puede filtrar