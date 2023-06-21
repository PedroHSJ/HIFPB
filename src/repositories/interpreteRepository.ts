import { AppDataSource } from "../data-source";
import { Interprete } from "../entities/Interprete";

export class InterpreteRepository{
    async post(interprete: Interprete): Promise<Interprete>{
        const repo = AppDataSource.getRepository(Interprete);
        const novoInterprete = await repo.save(interprete);
        return {id: novoInterprete.id} as Interprete;
    }

    async getByCpf(cpf: string): Promise<Interprete | null>{
        const repo = AppDataSource.getRepository(Interprete);
        const interprete = await repo.findOneBy({cpf: cpf});
        return interprete ? interprete : null;
    }

    async getAll(): Promise<Interprete[]>{
        const repo = AppDataSource.getRepository(Interprete);
        const interpretes = await repo.createQueryBuilder("interpretes")
        .innerJoinAndSelect("interpretes.alunos", "alunos")
        .getMany();
        return interpretes;
    }
}