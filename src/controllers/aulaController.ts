import { NextFunction, Request, Response } from 'express';
import { AulaService } from '../services/aulaService';
import { Aula } from '../entities/Aula';
import { Inject, Service } from 'typedi';
import { IAulaService } from '../services/interfaces/IAulaService';
import { AulaDTO } from '../dtos/AulaDTO';
import { plainToClass } from 'class-transformer';

@Service()
export class AulaController {
    aulaService: IAulaService;

    constructor(@Inject() aulaService: AulaService) {
        this.aulaService = aulaService;
    }

    async post(req: Request, res: Response, next: NextFunction) {
        try {
            const aulaDTO = req.body as AulaDTO;
            const aula = plainToClass(Aula, aulaDTO);
            const novaAula = await this.aulaService.post(aula);
            res.status(201).send(novaAula);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const aulas = await this.aulaService.getAll();

            res.status(200).send(aulas);
        } catch (error) {
            next(error);
        }
    }
}
