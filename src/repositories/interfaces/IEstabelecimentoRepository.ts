import { Estabelecimento } from '../../entities/Estabelecimento';

export interface IEstabelecimentoRepository {
    getAll(): Promise<Estabelecimento[]>;
    post(estabelecimento: Estabelecimento): Promise<Estabelecimento>;
}
