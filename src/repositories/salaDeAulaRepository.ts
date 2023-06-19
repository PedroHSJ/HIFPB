import { AppDataSource } from "../data-source";
import { SalaDeAula } from "../entities/SalaDeAula";

export class SalaDeAulaRepository {
  async getAll(): Promise<SalaDeAula[]> {
    const repo = AppDataSource.getRepository(SalaDeAula);
    const salasDeAulas = repo
      .createQueryBuilder("salaDeAula")
      .innerJoinAndSelect("salaDeAula.estabelecimento", "estabelecimento")
      .getMany();
    return salasDeAulas;
  }
  async post(salaDeAulas: SalaDeAula): Promise<SalaDeAula> {
    const repo = AppDataSource.getRepository(SalaDeAula);
    const novaSalaDeAula = await repo.save(salaDeAulas);
    return { id: novaSalaDeAula.id } as SalaDeAula;
  }
}
