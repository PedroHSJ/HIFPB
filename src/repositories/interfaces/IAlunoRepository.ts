import { Aluno } from '../../entities/Aluno';

export interface IAlunoRepository {
    getAll(): Promise<Aluno[]>;
    getById(id: string): Promise<Aluno | null>;
    getByCPF(cpf: string): Promise<Aluno | null>;
    post(aluno: Aluno): Promise<Aluno>;
    put(aluno: Aluno): Promise<Aluno>;
    delete(id: string): Promise<void>;
}
