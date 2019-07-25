import express, {Application} from 'express';
import  indexRoutes from './routes/indexRoutes';
import  espolRoutes from './routes/espolRoutes';
import cors from 'cors';
import morgan from 'morgan';
class Server {
    public app:Application

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    config(): void{ 
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
    }
    routes(): void{
        this.app.use(indexRoutes);  
        this.app.use('/api/espol/', espolRoutes);  
    }
    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port', this.app.get('port'))
        });
    }
}
const server = new Server();
server.start();