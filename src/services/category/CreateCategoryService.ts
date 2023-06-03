import prismaClient from "../../prisma"; // para ter acesso ao banco 

interface CategoryRequest{
    name:string;
}

class CreateCategoryService{
    async execute({name}:CategoryRequest){
    
        if (name === '') {
            throw new Error ('Name invalid')
        }
        const category = await prismaClient.category.create({ // criando dados no banco
            data:{
                name: name,
            },
            select:{ // devolvendo oque foi cadastrado no banco 
                id:true,
                name:true,
            }
        })
        
        return category;
    }
}

export {CreateCategoryService};