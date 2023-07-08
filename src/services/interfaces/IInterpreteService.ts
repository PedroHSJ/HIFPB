import { InterpreteDTO } from '../../dtos/InterpreteDTO';
import { Interprete } from '../../entities/Interprete';

export interface IInterpreteService {
    getAll(): Promise<Interprete[]>;
    getByCpf(cpf: string): Promise<Interprete | null>;
    getById(id: string): Promise<Interprete | null>;
    post(interprete: Interprete): Promise<Interprete>;
    put(interprete: InterpreteDTO, id: string): Promise<number>;
}
