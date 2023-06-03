import { Router } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController"
import { AuthUserController } from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController";
import { isAuthenticated } from "./middlewares/isAuthenticated";

const router = Router();

// ROTAS USER
router.post('/users', new CreateUserController().handle) // essa rota chama o  handle do controller - cria usuario

router.post('/session', new AuthUserController().handle) // login de usuario

router.get('/me',isAuthenticated, new DetailUserController().handle)

export {router};