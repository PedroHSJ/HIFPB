import { NextFunction, Request, Response } from 'express';

import { NotFoundError } from '../helpers/api-erros';
import { IAlunoService } from '../services/interfaces/IAlunoService';
import { AlunoService } from '../services/alunoService';
import { Inject, Service } from 'typedi';
import { AlunoDTO } from '../dtos/AlunoDTO';

@Service()
export class AlunoController {
    alunoService: IAlunoService;

    constructor(@Inject() alunoService: AlunoService) {
        this.alunoService = alunoService;
    }

    getAll = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const alunos = await this.alunoService.getAll();
            res.status(200).send(alunos);
        } catch (error) {
            next(error);
        }
    };

    getById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            const aluno = await this.alunoService.getById(id);
            res.status(200).send(aluno);
        } catch (error) {
            next(error);
        }
    };

    post = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const alunoDTO = req.body as AlunoDTO;
            const aluno = await this.alunoService.post(alunoDTO);
            res.status(201).send(aluno);
        } catch (error) {
            next(error);
        }
    };
}
