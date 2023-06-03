import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";

const router = Router();

// ROTAS USER
router.post('/users', new CreateUserController().handle) // essa rota chama o  handle do controller - cria usuario

router.post('/session', new AuthUserController().handle) // login de usuario

router.get('/me',isAuthenticated, new DetailUserController().handle)

// ROTAS CATEGORY
router.post('/category',isAuthenticated, new CreateCategoryController().handle)

router.get('/category',isAuthenticated, new ListCategoryController().execute)

// ROTAS PRODUCT
router.post('/product',isAuthenticated, new CreateProductController().handle)



export {router};