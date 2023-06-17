import { Router } from "express";
import {
  deleteAlunoController,
  getAllAlunoController,
  getByIdAlunoController,
  postAlunoController,
  putAlunoController,
} from "../controllers/alunoController";

const alunoRoutes = Router();

alunoRoutes.get("/", getAllAlunoController);
alunoRoutes.get("/:id", getByIdAlunoController);
alunoRoutes.post("/", postAlunoController);
alunoRoutes.put("/:id", putAlunoController);
alunoRoutes.delete("/:id", deleteAlunoController);

export { alunoRoutes };