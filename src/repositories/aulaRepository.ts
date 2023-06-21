import { AppDataSource } from "../data-source";
import { Aula } from "../entities/Aula";

export class AulaRepository{
    async post(aula: Aula): Promise<Aula>{
        const repo = AppDataSource.getRepository(Aula);
        const novaAula = await repo.save(aula);
        return {id: novaAula.id} as Aula;
    }
    async getAll(): Promise<Aula[]>{
        const repo = AppDataSource.getRepository(Aula);
        const aulas = repo.createQueryBuilder("aulas")
        .innerJoinAndSelect("aulas.aluno", "aluno")
        .innerJoinAndSelect("alunos.dia_da_semana", "dia_da_semana")
        .innerJoinAndSelect("alunos.sala_de_aula", "sala_de_aula")
        .getMany();

        return aulas;
    }
}