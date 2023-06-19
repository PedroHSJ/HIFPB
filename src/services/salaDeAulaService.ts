import { AppDataSource } from "../data-source";
import { SalaDeAula } from "../entities/SalaDeAula";
import { SalaDeAulaRepository } from "../repositories/salaDeAulaRepository";

export class SalaDeAulaService {
  async getAll(): Promise<SalaDeAula[]> {
    const salasDeAulas = await new SalaDeAulaRepository().getAll();
    return salasDeAulas;
  }
  async post(salaDeAulas: SalaDeAula): Promise<SalaDeAula> {
    const novaSalaDeAulas = await new SalaDeAulaRepository().post(salaDeAulas);
    return { id: novaSalaDeAulas.id } as SalaDeAula;
  }
}
