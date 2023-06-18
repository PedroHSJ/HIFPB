import { AppDataSource } from "../data-source";
import { Estabelecimento } from "../entities/Estabelecimento";

export class EstabelecimentoRepository {
  async getAll(): Promise<Estabelecimento[]> {
    const repo = AppDataSource.getRepository(Estabelecimento);
    const estabelecimentos = await repo.find();
    return estabelecimentos;
  }
  async post(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    const repo = AppDataSource.getRepository(Estabelecimento);
    const newEstabelecimento = await repo.save(estabelecimento);
    return { id: newEstabelecimento.id } as Estabelecimento;
  }
}
