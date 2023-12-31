import { NextFunction, Request, Response } from 'express';
import { EstabelecimentoService } from '../services/estabelecimentoService';
import { Estabelecimento } from '../entities/Estabelecimento';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { json } from 'stream/consumers';
import { Inject, Service } from 'typedi';
import { IEstabelecimentoService } from '../services/interfaces/IEstabelecimentoService';

@Service()
export class EstabelecimentoController {
    estabelecimentoService: IEstabelecimentoService;

    constructor(@Inject() estabelecimentoService: EstabelecimentoService) {
        this.estabelecimentoService = estabelecimentoService;
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const estabelecimento = await this.estabelecimentoService.getAll();
            res.status(200).send(estabelecimento);
        } catch (error) {
            next(error);
        }
    }

    async post(req: Request, res: Response, next: NextFunction) {
        try {
            const estabelecimentoClass = plainToClass(
                Estabelecimento,
                req.body
            );

            const novoEstabelecimento = await this.estabelecimentoService.post(
                estabelecimentoClass
            );
            res.status(201).send(novoEstabelecimento);
        } catch (error) {
            console.log(error);
            next(error);
        }
    }
}
