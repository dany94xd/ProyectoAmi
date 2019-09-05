import { Request, Response } from 'express';
import pool from '../database'

class IndexControllers{

    index (req:Request, res:Response){
        res.send('Hello');
    } 

    public async updateUser (req:Request, res:Response): Promise<void>{
        const { id } = req.params;
        const oldGame = req.body;
        await pool.query('UPDATE usuario set ? WHERE id_persona = ?', [req.body, id]);
        res.json({ message: "El usuario fue actualizado" });
    }

}
export const indexControllers= new IndexControllers();