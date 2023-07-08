import { Interprete } from '../../entities/Interprete';

export interface IInterpreteRepository {
    getAll(): Promise<Interprete[]>;
    getByCpf(cpf: string): Promise<Interprete | null>;
    getById(id: string): Promise<Interprete | null>;
    post(interprete: Interprete): Promise<Interprete>;
    put(interprete: Interprete, id: string): Promise<number>;
}
