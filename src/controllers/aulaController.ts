import { NextFunction, Request, Response } from "express";
import { AulaService } from "../services/aulaService";
import { Aula } from "../entities/Aula";

export class AulaController{
    async post(
        res: Response, 
        req: Request, 
        next: NextFunction){
        try{
        const aula = req.body as Aula;
        const novaAula = await new AulaService().post(aula);
        res.send(200).json(novaAula);
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