import { NextFunction, Request, Response } from 'express';
import { SalaDeAulaService } from '../services/salaDeAulaService';
import { Inject, Service } from 'typedi';
import { ISalaDeAulaService } from '../services/interfaces/ISalaDeAulaService';

@Service()
export class SalaDeAulaController {
    private salaDeAulaService: ISalaDeAulaService;

    constructor(@Inject() salaDeAulaService: SalaDeAulaService) {
        this.salaDeAulaService = salaDeAulaService;
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const salasDeAulas = this.salaDeAulaService.getAll();
            res.status(200).send(salasDeAulas);
        } catch (error) {
            next(error);
        }
    }
    async post(req: Request, res: Response, next: NextFunction) {
        try {
            const salaDeAulas = req.body;
            const novaSalaDeAula = this.salaDeAulaService.post(salaDeAulas);
            res.status(201).send(novaSalaDeAula);
        } catch (error) {
            next(error);
        }
    }
}
