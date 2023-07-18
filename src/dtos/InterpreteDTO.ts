import { Aluno } from '../entities/Aluno';
import { Role } from '../entities/Role';
import { AlunoDTO } from './AlunoDTO';

export class InterpreteDTO {
    nome: string;
    cpf: string;
    username: string;
    senha: string;
    alunos: AlunoDTO[];
}
