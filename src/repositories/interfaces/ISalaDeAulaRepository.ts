import { SalaDeAula } from '../../entities/SalaDeAula';

export interface ISalaDeAulaRepository {
    getAll(): Promise<SalaDeAula[]>;
    post(salaDeAulas: SalaDeAula): Promise<SalaDeAula>;
}
