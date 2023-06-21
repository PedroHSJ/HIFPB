import { Router } from "express";
import {
  UsuarioController
} from "../controllers/usuarioController";
const usuarioRoutes = Router();

usuarioRoutes.get("/", new UsuarioController().getAllUsuarioController);
usuarioRoutes.get("/:id", new UsuarioController().getByIdUsuarioController);
//get By username pela query
usuarioRoutes.get("/username/:username", new UsuarioController().getByUsernameUsuarioController);
usuarioRoutes.post("/", new UsuarioController().postUsuarioController);
usuarioRoutes.put("/:id", new UsuarioController().putUsuarioController);
usuarioRoutes.delete("/:id", new UsuarioController().deleteUsuarioController);

export {usuarioRoutes};
