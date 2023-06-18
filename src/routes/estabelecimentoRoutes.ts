import { Router } from "express";

import { EstabelecimentoController } from "../controllers/estabelecimentoController";

const estabelecimentoRoutes = Router();

estabelecimentoRoutes.get("/", new EstabelecimentoController().getAll);
estabelecimentoRoutes.post("/", new EstabelecimentoController().post);

export { estabelecimentoRoutes };
