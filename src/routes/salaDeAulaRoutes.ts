import { Router } from "express";

import { SalaDeAulaController } from "../controllers/salaDeAulaController";

const salaDeAulaRoutes = Router();

salaDeAulaRoutes.get("/", new SalaDeAulaController().getAll);
salaDeAulaRoutes.post("/", new SalaDeAulaController().post);

export { salaDeAulaRoutes };
