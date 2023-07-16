import { AppDataSource } from '../data-source';
import { Estabelecimento } from '../entities/Estabelecimento';
import { SalaDeAula } from '../entities/SalaDeAula';

export class EstabelecimentoRepository {
    async getAll(): Promise<Estabelecimento[]> {
        const repo = AppDataSource.getRepository(Estabelecimento);
        //JOIN COM A TABELA salas_de_aula
        const estabelecimentos = await repo
            .createQueryBuilder('estabelecimentos')
            .leftJoinAndSelect('estabelecimentos.salas_de_aula', 'salasDeAula')
            .getMany();
        return estabelecimentos;
    }

    async post(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
        const repo = AppDataSource.getRepository(Estabelecimento);
        const newEstabelecimento = await repo.save(estabelecimento);
        return { id: newEstabelecimento.id } as Estabelecimento;
    }
}
