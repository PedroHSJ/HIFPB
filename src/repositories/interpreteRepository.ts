import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Interprete } from "../entities/Interprete";
import { IInterpreteRepository } from "./interfaces/IInterpreteRepository";
import { Service } from "typedi";

@Service()
export class InterpreteRepository implements IInterpreteRepository {
  repo: Repository<Interprete>;

  constructor() {
    this.repo = AppDataSource.getRepository(Interprete);
  }
  async put(interprete: Interprete, id: string): Promise<number> {
    console.log(interprete);
    const update = await this.repo.update(id, interprete);
    console.log(update.affected);
    return update.affected ?? 0;
  }

  async post(interprete: Interprete): Promise<Interprete> {
    const novoInterprete = await this.repo.save(interprete);
    return { id: novoInterprete.id } as Interprete;
  }

  async getByCpf(cpf: string): Promise<Interprete | null> {
    const interprete = await this.repo.findOneBy({ cpf: cpf });
    return interprete ? interprete : null;
  }

  async getAll(): Promise<Interprete[]> {
    const interpretes = await this.repo
      .createQueryBuilder("interpretes")
      .leftJoinAndSelect("interpretes.alunos", "alunos")
      .getMany();
    return interpretes;
  }

  async getById(id: string): Promise<Interprete | null> {
    const interprete = await this.repo.findOneBy({ id: id });
    return interprete ? interprete : null;
  }
}
