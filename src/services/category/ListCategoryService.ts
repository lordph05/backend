import prismaClient from "../../prisma";

class ListCategoryService{
    async execute(){

        const category = await prismaClient.category.findMany({ // traz tudo que encontra no banco
            select:{ // só devolve do banco o id e o nome. de tudo que encontrar
                id:true,
                name:true,
            }
        })

        return category;

    }
}

export {ListCategoryService};