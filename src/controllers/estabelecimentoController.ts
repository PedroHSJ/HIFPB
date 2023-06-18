import { NextFunction, Request, Response } from "express";
import { EstabelecimentoService } from "../services/estabelecimentoService";

export class EstabelecimentoController {
  constructor() {}

  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const estabelecimento = await new EstabelecimentoService().getAll();
      res.status(200).send(estabelecimento);
    } catch (error) {
      next(error);
    }
  }

  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const estabelecimento = await new EstabelecimentoService().post(req.body);
      res.status(201).send(estabelecimento);
    } catch (error) {
      next(error);
    }
  }
}
