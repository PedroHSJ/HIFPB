import { Router } from "express";
import {
  getAllUsuarioController,
  getByIdUsuarioController,
  postUsuarioController,
  putUsuarioController,
  deleteUsuarioController,
} from "../controllers/usuarioController";
const usuarioRoutes = Router();

usuarioRoutes.get("/", getAllUsuarioController);
usuarioRoutes.get("/:id", getByIdUsuarioController);
usuarioRoutes.post("/", postUsuarioController);
usuarioRoutes.put("/:id", putUsuarioController);
usuarioRoutes.delete("/:id", deleteUsuarioController);

export default usuarioRoutes;
