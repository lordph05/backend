import { Request, Response } from "express";
import { CreateCategoryService } from "../../services/category/CreateCategoryService";

class CreateCategoryController{
    async handle(req: Request, res: Response){
        const {name} = req.body; // recebendo do front o nome da category

        const createCategoryService = new CreateCategoryService(); // pegando o serviço

        const category = await createCategoryService.execute({name}); // retornando o serviço

        return res.json(category);

    }
}

export {CreateCategoryController};