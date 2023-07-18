import { Aula } from '../entities/Aula';
import { AulaDTO } from './AulaDTO';

export class AlunoDTO {
    nome: string;
    cpf: string;
    aulas: AulaDTO[];
}
