import { AlunoDTO } from '../../dtos/AlunoDTO';
import { Aluno } from '../../entities/Aluno';

export interface IAlunoService {
    getAll(): Promise<Aluno[]>;
    post(aluno: AlunoDTO): Promise<Aluno>;
    getById(id: string): Promise<Aluno | null>;
    put(aluno: Aluno): Promise<Aluno>;
    delete(id: string): Promise<void>;
}
