import { Router } from "express";

import { AulaController } from "../controllers/aulaController";


const aulaRoutes = Router();


aulaRoutes.post("/", new AulaController().post);

export { aulaRoutes };
