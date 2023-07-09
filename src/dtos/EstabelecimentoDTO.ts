import { SalaDeAula } from '../entities/SalaDeAula';
import { SalaDeAulaDTO } from './SalaDeAulaDTO';

export class EstabelecimentoDTO {
    nome: string;
    cnpj: string;
    salas_de_aula: SalaDeAulaDTO[];
}
