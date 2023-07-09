import { Aula } from '../entities/Aula';
import { Estabelecimento } from '../entities/Estabelecimento';

export class SalaDeAulaDTO {
    nome: string;
    estabelecimento: Estabelecimento;
    //aulas: Aula[];
}
