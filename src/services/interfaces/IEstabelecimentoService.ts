import { Estabelecimento } from '../../entities/Estabelecimento';

export interface IEstabelecimentoService {
    getAll(): Promise<Estabelecimento[]>;
    post(estabelecimento: Estabelecimento): Promise<Estabelecimento>;
}
