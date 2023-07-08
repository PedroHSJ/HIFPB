import { SalaDeAula } from '../../entities/SalaDeAula';

export interface ISalaDeAulaService {
    getAll(): Promise<SalaDeAula[]>;
    post(salaDeAulas: SalaDeAula): Promise<SalaDeAula>;
}
