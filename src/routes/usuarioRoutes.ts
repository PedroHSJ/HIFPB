import { Router } from "express";
import {
  UsuarioController
} from "../controllers/usuarioController";
import Container from "typedi";
const usuarioRoutes = Router();
const usuarioController = Container.get(UsuarioController);

usuarioRoutes.get("/", usuarioController.getAll.bind(usuarioController));
usuarioRoutes.get("/:id", usuarioController.getById.bind(usuarioController));
//get By username pela query
usuarioRoutes.get("/username/:username",usuarioController.getByUsername.bind(usuarioController));
usuarioRoutes.post("/",usuarioController.post.bind(usuarioController));
usuarioRoutes.put("/:id",usuarioController.put.bind(usuarioController));
usuarioRoutes.delete("/:id",usuarioController.delete.bind(usuarioController));

export {usuarioRoutes};
