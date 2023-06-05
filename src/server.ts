import express , { Request, Response, NextFunction} from 'express'
import 'express-async-errors'
import cors from 'cors';
import path from 'path'
import { router } from './routes';

const app = express ();
app.use(express.json());

app.use(router);

app.use(
    '/files', // para pega o endereço da foto com caminho files/nome da foto
    express.static(path.resolve(__dirname, '..','tmp'))
)

app.use((err: Error, req: Request, res:Response, next:NextFunction) => {
if (err instanceof Error) {
    //se for uma instacia do tipo error
    return res.status(400).json({
        error: err.message
    })
}

return res.status(500).json({
    status:'error',
    message:'Internal server error.'
})
})


app.listen(3333, ()  => console.log('Servidor Online!!'))