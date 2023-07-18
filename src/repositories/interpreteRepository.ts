import { Repository, UpdateResult } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Interprete } from '../entities/Interprete';
import { IInterpreteRepository } from './interfaces/IInterpreteRepository';
import { Service } from 'typedi';
import { NextFunction } from 'express';
import { BadResquestError } from '../helpers/api-erros';

@Service()
export class InterpreteRepository implements IInterpreteRepository {
    repo: Repository<Interprete>;
    next: NextFunction;

    constructor() {
        this.repo = AppDataSource.getRepository(Interprete);
    }
    async put(interprete: Interprete, id: string): Promise<number> {
        const { nome, cpf, alunos } = interprete;
        // console.log(alunos);

        const interpreteAtual = await this.getById(id);
        const updateResult = await this.repo.update(id, { nome, cpf });
        if (updateResult.affected) {
            // Se há alunos, faz a associação many-to-many separadamente
            await this.repo
                .createQueryBuilder()
                .relation(Interprete, 'alunos')
                .of(id)
                .addAndRemove(alunos ? alunos : [], interpreteAtual?.alunos)
                .catch((erro) => {
                    throw new BadResquestError(erro.message);
                });
        }

        return updateResult.affected ?? 0;
    }

    async post(interprete: Interprete): Promise<Interprete> {
        const novoInterprete = await this.repo.save(interprete);
        return { id: novoInterprete.id } as Interprete;
    }

    async getByCpf(cpf: string): Promise<Interprete | null> {
        const interprete = await this.repo.findOneBy({ cpf: cpf });
        return interprete ? interprete : null;
    }

    async getAll(): Promise<Interprete[]> {
        const interpretes = await this.repo
            .createQueryBuilder('interpretes')
            .leftJoinAndSelect('interpretes.alunos', 'alunos')
            .leftJoinAndSelect('alunos.aulas', 'aulas')
            .getMany();
        return interpretes;
    }

    async getById(id: string): Promise<Interprete | null> {
        const interprete = await this.repo
            .createQueryBuilder('interpretes')
            .leftJoinAndSelect('interpretes.alunos', 'alunos')
            .leftJoinAndSelect('alunos.aulas', 'aulas')
            .where('interpretes.id = :id', { id: id })
            .getOne()
            .catch((erro) => {
                throw new BadResquestError(erro.message);
            });
        return interprete ? interprete : null;
    }
}
