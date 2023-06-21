import { NextFunction, Request, Response } from "express";
import { EstabelecimentoService } from "../services/estabelecimentoService";
import { Estabelecimento } from "../entities/Estabelecimento";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { json } from "stream/consumers";

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
      const estabelecimentoClass = plainToClass(Estabelecimento, req.body);
     
      const novoEstabelecimento = await new EstabelecimentoService().post(
        estabelecimentoClass
      );
      res.status(201).send(novoEstabelecimento);
    } catch (error) {
      next(error);
    }
  }
}
