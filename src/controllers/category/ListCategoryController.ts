import { Request, Response } from "express";

import { ListCategoryService } from "../../services/category/ListCategoryService";

class ListCategoryController{
    async execute(req: Request, res:Response){
        const listCategoryService = new ListCategoryService();

        const category = await listCategoryService.execute();

        return res.json(category);

    }
}

export {ListCategoryController};