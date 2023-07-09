import {
    ApiError,
    BadResquestError,
    NotFoundError,
} from '../helpers/api-erros';
import { hash } from 'bcrypt';
import { IAlunoService } from './interfaces/IAlunoService';
import { IAlunoRepository } from '../repositories/interfaces/IAlunoRepository';
import { Aluno } from '../entities/Aluno';
import { AlunoRepository } from '../repositories/alunoRepository';
import { Inject, Service } from 'typedi';
import { AlunoDTO } from '../dtos/AlunoDTO';
import { plainToClass } from 'class-transformer';

@Service()
export class AlunoService implements IAlunoService {
    private alunoRepository: IAlunoRepository;

    constructor(@Inject() alunoRepository: AlunoRepository) {
        this.alunoRepository = alunoRepository;
    }
    async getById(id: string): Promise<Aluno | null> {
        const aluno = await this.alunoRepository.getById(id);
        return aluno;
    }
    async getAll(): Promise<Aluno[]> {
        const alunos = await this.alunoRepository.getAll();
        return alunos;
    }
    async getByCPF(cpf: string): Promise<Aluno | null> {
        const aluno = await this.alunoRepository.getByCPF(cpf);
        return aluno;
    }
    async put(aluno: Aluno): Promise<Aluno> {
        const alunoAtualizado = await this.alunoRepository.put(aluno);
        return alunoAtualizado;
    }
    async delete(id: string): Promise<void> {
        throw new Error('Method not implemented.');
    }

    async post(alunoDTO: AlunoDTO): Promise<Aluno> {
        const aluno = plainToClass(Aluno, alunoDTO);
        const alunoExistente = await this.alunoRepository.getByCPF(aluno.cpf);
        if (alunoExistente) throw new BadResquestError('CPF já cadastrado');
        const newAluno = await this.alunoRepository.post(aluno);
        return newAluno;
    }
}
