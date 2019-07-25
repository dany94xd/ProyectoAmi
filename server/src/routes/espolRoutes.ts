import { Router } from 'express';
import  espolControllers  from '../controllers/espolControllers';

class EspolRoutes{
    public router: Router = Router();
    constructor(){
        this.config();
    }
    config():void{
        this.router.get('/', espolControllers.list);
        this.router.post('/', espolControllers.create);
    } 
}

const espolRoutes = new EspolRoutes();
export default espolRoutes.router;