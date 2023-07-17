import { Aula } from '../../entities/Aula';

export interface IAulaRepository {
    post(aula: Aula): Promise<Aula>;
    getAll(): Promise<Aula[]>;
    getByDiaDaSemana(dia_da_semana: string): Promise<Aula>;
}
