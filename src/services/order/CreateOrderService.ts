import prismaClient from "../../prisma"; // para travalhar com banco de dados

interface OrderRequeste{ // quando inicar a funcao execute tem que forncer esses dados
    table: number;
    name: string;
}

    class CreateOrderService {
        async execute({table, name}:OrderRequeste) {
            const order = await prismaClient.order.create({
                data:{
                    table: table,
                    name: name
                }
            })

            return order;
            
        }
    }
    export {CreateOrderService}

