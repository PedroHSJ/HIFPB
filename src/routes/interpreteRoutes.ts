import { Router } from "express";
import { InterpreteController } from "../controllers/interpreteController";

const interpreteRoutes = Router();

interpreteRoutes.post("/", new InterpreteController().post);

export { interpreteRoutes };
