import { NextFunction, Request, Response } from "express";
import { Interprete } from "../entities/Interprete";
import { AppDataSource } from "../data-source";
import { InterpreteService } from "../services/interpreteService";
import { BadResquestError } from "../helpers/api-erros";

export class InterpreteController {
  async post(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const interprete = req.body as Interprete;
      const novoInterprete = await new InterpreteService().post(interprete);
      res.status(201).send(novoInterprete);
    } catch (error) {
      next(error);
    }
  }
}
