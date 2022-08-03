import { Router } from "express"
import { usersController } from "./controllers/userControlles.js";

const routes = Router();

routes.get('/users', usersController.listarUsuario)

routes.post('/users', usersController.criarUsuario)

// get - ler dados
//post - criar dados
//put/patch - editar dados
//delete - deletar dados

export {routes};