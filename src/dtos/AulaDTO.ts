import { Algorithm } from 'jsonwebtoken';
import { AlunoDTO } from './AlunoDTO';

export class AulaDTO {
    aluno: { id: string };
    sala_de_aula: { id: string };
    dia_da_semana: string;
}
