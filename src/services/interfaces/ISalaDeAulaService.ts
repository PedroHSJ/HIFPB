import { SalaDeAulaDTO } from '../../dtos/SalaDeAulaDTO';
import { SalaDeAula } from '../../entities/SalaDeAula';

export interface ISalaDeAulaService {
    getAll(): Promise<SalaDeAula[]>;
    post(salaDeAulas: SalaDeAulaDTO): Promise<SalaDeAula>;
}
