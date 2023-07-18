import { Aluno } from '../entities/Aluno';
import { AlunoDTO } from './AlunoDTO';

export class InterpreteDTO {
    nome: string;
    cpf: string;
    alunos: AlunoDTO[];
}
