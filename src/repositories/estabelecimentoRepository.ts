import { Service } from 'typedi';
import { AppDataSource } from '../data-source';
import { Estabelecimento } from '../entities/Estabelecimento';
import { SalaDeAula } from '../entities/SalaDeAula';
import { Repository } from 'typeorm';
import { IEstabelecimentoRepository } from './interfaces/IEstabelecimentoRepository';

@Service()
export class EstabelecimentoRepository implements IEstabelecimentoRepository {
    repo: Repository<Estabelecimento>;

    constructor() {
        this.repo = AppDataSource.getRepository(Estabelecimento);
    }

    async getAll(): Promise<Estabelecimento[]> {
        //JOIN COM A TABELA salas_de_aula
        const estabelecimentos = await this.repo
            .createQueryBuilder('estabelecimentos')
            .leftJoinAndSelect('estabelecimentos.salas_de_aula', 'salasDeAula')
            .getMany();
        return estabelecimentos;
    }

    async post(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
        const newEstabelecimento = await this.repo.save(estabelecimento);
        return { id: newEstabelecimento.id } as Estabelecimento;
    }
}
