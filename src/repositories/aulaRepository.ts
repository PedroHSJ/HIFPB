import { Service } from 'typedi';
import { AppDataSource } from '../data-source';
import { Aula } from '../entities/Aula';
import { Repository } from 'typeorm';
import { IAulaRepository } from './interfaces/IAulaRepository';
import { DiasDaSemanaEnum } from '../enums/DiasDaSemana';

@Service()
export class AulaRepository implements IAulaRepository {
    repo: Repository<Aula>;

    constructor() {
        this.repo = AppDataSource.getRepository(Aula);
    }
    async post(aula: Aula): Promise<Aula> {
        const novaAula = await this.repo.save(aula);
        return { id: novaAula.id } as Aula;
    }
    async getAll(): Promise<Aula[]> {
        const aulas = await this.repo
            .createQueryBuilder('aulas')
            .innerJoinAndSelect('aulas.aluno', 'aluno')
            .innerJoinAndSelect('aulas.sala_de_aula', 'sala_de_aula')
            .getMany();

        return aulas;
    }

    async getByDiaDaSemana(dia_da_semana: string): Promise<Aula> {
        console.log(dia_da_semana);
        const aulas = await this.repo
            .createQueryBuilder('aulas')
            .innerJoinAndSelect('aulas.aluno', 'aluno')
            .innerJoinAndSelect('aulas.sala_de_aula', 'sala_de_aula')
            .where('aulas.dia_da_semana = :dia_da_semana', {
                dia_da_semana: dia_da_semana,
            })
            .getOne();

        return aulas ? aulas : ({} as Aula);
    }
}
