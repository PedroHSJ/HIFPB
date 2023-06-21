import { AppDataSource } from "../data-source";
import { Interprete } from "../entities/Interprete";
import { BadResquestError } from "../helpers/api-erros";
import { InterpreteRepository } from "../repositories/interpreteRepository";

export class InterpreteService{
    async post(interprete: Interprete): Promise<Interprete>{
        if(interprete.cpf){
            interprete.cpf = interprete.cpf.replace(/\D/g, '');
            const interpreteExistente = await new InterpreteRepository().getByCpf(interprete.cpf);

            if(interpreteExistente){
                throw new BadResquestError('CPF já cadastrado');
            }
        }
        const novoInterprete = await new InterpreteRepository().post(interprete);     
        return {id: novoInterprete.id} as Interprete;
    }

    async getByCpf(cpf: string): Promise<Interprete | null>{
        const interprete = await new InterpreteRepository().getByCpf(cpf);
        return interprete ? interprete : null;
    }

    async getAll(): Promise<Interprete[]>{
        const interpretes = await new InterpreteRepository().getAll();
        return interpretes;
    }
}