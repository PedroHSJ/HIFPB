import { Aluno } from '../entities/Aluno';
import { AppDataSource } from '../data-source';
import { Repository } from 'typeorm';
import { Inject, Service } from 'typedi';
import { IAlunoRepository } from './interfaces/IAlunoRepository';
import { BadResquestError } from '../helpers/api-erros';
@Service()
export class AlunoRepository implements IAlunoRepository {
    repo: Repository<Aluno>;

    constructor() {
        this.repo = AppDataSource.getRepository(Aluno);
    }
    getAll = async (): Promise<Aluno[]> => {
        const alunos = await this.repo
            .createQueryBuilder('aluno')
            .leftJoinAndSelect('aluno.interpretes', 'interprete')
            .leftJoinAndSelect('aluno.aulas', 'aula')
            .getMany();
        return alunos;
    };

    getById = async (id: string): Promise<Aluno | null> => {
        const aluno = await this.repo
            .createQueryBuilder('aluno')
            .leftJoinAndSelect('aluno.interpretes', 'interprete')
            .where('aluno.id = :id', { id: id })
            .getOne()
            .catch((erro) => {
                throw new BadResquestError(erro.message);
            });

        return aluno ? aluno : null;
    };

    getByCPF = async (cpf: string): Promise<Aluno | null> => {
        const aluno = await this.repo.findOneBy({ cpf: cpf });
        return aluno ? aluno : null;
    };
    post = async (aluno: Aluno): Promise<Aluno> => {
        const newAluno = await this.repo.save(aluno);
        return newAluno;
    };
    put = async (aluno: Aluno): Promise<Aluno> => {
        const repo = AppDataSource.getRepository(Aluno);
        const newAluno = await repo.update(aluno.id, aluno);
        return newAluno.affected ? aluno : ({} as Aluno);
    };
    delete = async (id: string): Promise<void> => {
        const repo = AppDataSource.getRepository(Aluno);
        await repo.delete(id);
    };
}
