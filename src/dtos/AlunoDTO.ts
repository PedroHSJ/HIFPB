import { Aula } from '../entities/Aula';

export class AlunoDTO {
    nome: string;
    cpf: string;
    aulas: Aula[];
}
