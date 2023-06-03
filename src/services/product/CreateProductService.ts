import prismaClient from "../../prisma"; // para acessar o banco

interface ProductRequest { // quando usar a funcao execute precisa fornecer esses parametros
name: string;
price: string,
description: string;
banner: string;
category_id: string;
} 

class CreateProductService{
    async execute ({name, price,description,banner,category_id}: ProductRequest){ // precisa fornecer os parametros 
        return{ok:true}

    }
}

export {CreateProductService};