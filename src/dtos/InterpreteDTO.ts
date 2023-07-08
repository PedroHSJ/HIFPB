import { Aluno } from '../entities/Aluno';

export class InterpreteDTO {
    nome: string;
    cpf: string;
    alunos: Aluno[];
}
