import prismaClient from "../../prisma"; // para acesar o banco de dados

interface ItemRequest {
    item_id: string; // quando chama esse execute desse serviço tem que passa o item id.
}

class RemoveItemService{
    async execute({item_id}:ItemRequest){

        const order = await prismaClient.item.delete ({ // deletando do banco 
            where:{
                id: item_id
            }
        }) 
        return order;
    }
}
export {RemoveItemService}