import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import {sign} from 'jsonwebtoken';

interface AuthRequest{
    email: string;
    password: string;
}

class AuthUserService{
    async execute ({email,password}:AuthRequest){
        //verificar se o email existe
const user = await prismaClient.user.findFirst({ // findFirst procura o primeiro que achar
    where: {
        email: email
    }
})
if (!user){
    throw Error ("User/password incorrect")
}
        // verifica se a senha esta correta
        const passwordMatch = await compare(password,user.password)

        if (!passwordMatch) {
            throw Error ("User/password incorrect")
        }
        // se deu tudo certo vamos gera uma token para o usuario.
        const token = sign(
            {
                name: user.name,
                email:user.email
            },
            process.env.JWT_SECRET,
            {
                subject:user.id,
                expiresIn:'30d'
            }
        )
    
        
        return{
            id:user.id,
            name:user.name,
            email:user.email,
            token:token
        }
    }
    
}
export {AuthUserService};
