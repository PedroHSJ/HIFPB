import { NextFunction, Request, Response } from 'express';
import { Interprete } from '../entities/Interprete';
import { AppDataSource } from '../data-source';
import { InterpreteService } from '../services/interpreteService';
import { BadResquestError } from '../helpers/api-erros';
import { Inject, Service } from 'typedi';
import { IInterpreteService } from '../services/interfaces/IInterpreteService';
import { InterpreteDTO } from '../dtos/InterpreteDTO';
import { plainToClass } from 'class-transformer';

@Service()
export class InterpreteController {
    private _interpreteService: IInterpreteService;

    constructor(@Inject() interpreteService: InterpreteService) {
        this._interpreteService = interpreteService;
    }

    async post(req: Request, res: Response, next: NextFunction) {
        try {
            const interpreteDTO = req.body as InterpreteDTO;
            const interprete = plainToClass(Interprete, interpreteDTO);
            const novoInterprete = await this._interpreteService.post(
                interprete
            );
            res.status(201).send(novoInterprete);
        } catch (error) {
            console.log('catch');
            next(error);
        }
    }

    async getByCpf(req: Request, res: Response, next: NextFunction) {
        try {
            const cpf = req.params.cpf;
            const interprete = await this._interpreteService.getByCpf(cpf);
            if (!interprete) {
                res.status(404).send();
            }
            res.status(200).send(interprete);
        } catch (error) {
            next(error);
        }
    }

    async getById(req: Request, res: Response, next: NextFunction) {
        try {
            const id = req.params.id;
            const interprete = await this._interpreteService.getById(id);
            if (!interprete) {
                res.status(404).send();
            }
            // if(interprete instanceof Error)
            res.status(200).send(interprete);
        } catch (error) {
            next(error);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const interpretes = await this._interpreteService.getAll();
            res.status(200).send(interpretes);
        } catch (error) {
            next(error);
        }
    }

    async put(req: Request, res: Response, next: NextFunction) {
        try {
            const interprete = req.body as InterpreteDTO;
            const id = req.params.id;
            const rows = await this._interpreteService.put(interprete, id);
            if (rows === 0)
                res.status(400).send({ message: 'Erro ao editar interprete.' });
            res.status(200).send({
                message: 'Interprete editado com sucesso.',
            });
        } catch (error) {
            next(error);
        }
    }
}
