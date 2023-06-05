import prismaClient from "../../prisma"; // para acessar o banco

interface ProductRequest { // quando usar a funcao execute precisa fornecer esses parametros
name: string;
price: string,
description: string;
banner: string;
category_id: string;
} 

class CreateProductService{
    async execute ({name, price,description,banner,category_id}: ProductRequest){  // precisa fornecer os parametros 
       
        const product = await prismaClient.product.create({
            data:{
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id,
            }
        })
        return product;

    }
}

export {CreateProductService};