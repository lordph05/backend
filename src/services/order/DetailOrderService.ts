import prismaClient from "../../prisma";
interface DetailRequest{
    order_id: string;
}


class DetailOrderService {
    async execute({order_id}:DetailRequest){

         const orders = await prismaClient.item.findMany({
            where:{
                order_id: order_id
            },
            include:{
                product: true, // pegando do banco tudo que esta em produto
                order: true,
            }
         })

         return orders;
    }
}

export {DetailOrderService}