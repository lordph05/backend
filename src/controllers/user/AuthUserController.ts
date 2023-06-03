import {Request, Response} from 'express'
import { AuthUserService } from '../../services/user/AuthUserService';

class AuthUserController{
async handle (req: Request, res:Response){
    const {email, password} = req.body; // traz email e senha do front

    const authUserService = new AuthUserService();

    const auth = await authUserService.execute({ // quando retorna vai para variavel auth
        email,
        password
    })

    return res.json(auth);
}
}

export {AuthUserController};