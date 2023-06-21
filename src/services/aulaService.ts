import { Aula } from "../entities/Aula";
import { BadResquestError } from "../helpers/api-erros";
import { AulaRepository } from "../repositories/aulaRepository";

export class AulaService{
    async post(aula: Aula): Promise<Aula>{
        aula.validate();
        if(!aula.valide){
            throw new BadResquestError("Dados inválidos.")
        }
        const novaAula = await new AulaRepository().post(aula);
        return novaAula
    }
    async getAll(): Promise<Aula[]>{
        const aulas = await new AulaRepository().getAll();
        return aulas;
    }
}