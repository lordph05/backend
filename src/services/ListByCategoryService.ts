import prismaClient from "../prisma";

interface ProductRequest {
    category_id: string;
}

class ListByCategoryService {
    async execute({category_id}:ProductRequest) { // lista o id da categoria 

        const findByCategory = await prismaClient.product.findMany({ // buscar todos no bando
            where:{
                 category_id: category_id
            }
        })
        return findByCategory;

    }
}

export {ListByCategoryService}