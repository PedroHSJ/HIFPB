import { NextFunction, Request, Response } from "express";
import { AulaService } from "../services/aulaService";
import { Aula } from "../entities/Aula";

export class AulaController{
    async post(req: Request, res: Response, next: NextFunction) {

        try{
        const aula = req.body;
        const novaAula = await new AulaService().post(aula);
        res.status(201).send(novaAula);
    }
        catch(error){
            next(error);
        }
    }

    async getAll(
        res: Response,
        req: Request,
        next: NextFunction
    ){
        try{
            const aulas = await new AulaService().getAll();
            return aulas;
        }
        catch(error){
            next(error);
        }
    }
}