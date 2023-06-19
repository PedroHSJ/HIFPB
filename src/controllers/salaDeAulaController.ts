import { NextFunction, Request, Response } from "express";
import { SalaDeAulaService } from "../services/salaDeAulaService";

export class SalaDeAulaController {
  async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const salasDeAulas = await new SalaDeAulaService().getAll();
      res.status(200).send(salasDeAulas);
    } catch (error) {
      next(error);
    }
  }
  async post(req: Request, res: Response, next: NextFunction) {
    try {
      const salaDeAulas = req.body;
      const novaSalaDeAula = await new SalaDeAulaService().post(salaDeAulas);
      res.status(201).send(novaSalaDeAula);
    } catch (error) {
      next(error);
    }
  }
}
