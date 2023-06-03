import{  Request, Response, response}  from'express';
import { CreateUserService } from '../../services/user/createUserservice';

class CreateUserController{
    async handle(req: Request, res: Response){

        const {name, email, password} = req.body  // req. recebe os dados do front
       
        const createUserservice = new CreateUserService(); // inicializa o serviço 

        const user = await createUserservice.execute({name, email, password}); 

        return res.json({user})
    }
}

export {CreateUserController}
