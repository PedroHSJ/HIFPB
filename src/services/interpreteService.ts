import { Inject, Service } from "typedi";
import { AppDataSource } from "../data-source";
import { Interprete } from "../entities/Interprete";
import { BadResquestError } from "../helpers/api-erros";
import { InterpreteRepository } from "../repositories/interpreteRepository";
import { IInterpreteService } from "./interfaces/IInterpreteService";
import { IInterpreteRepository } from "../repositories/interfaces/IInterpreteRepository";

@Service()
export class InterpreteService implements IInterpreteService {
  private _interpreteRepository: IInterpreteRepository;

  constructor(@Inject() interpreteRepository: InterpreteRepository) {
    this._interpreteRepository = interpreteRepository;
  }
  async put(interprete: Interprete, id: string): Promise<number> {
    const interpreteExistente = await this._interpreteRepository.getById(id);
    if (!interpreteExistente) {
      throw new BadResquestError("Interprete não encontrado");
    }
    const rowsAffected = this._interpreteRepository.put(interprete, id);
    return rowsAffected;
  }

  async post(interprete: Interprete): Promise<Interprete> {
    if (interprete.cpf) {
      interprete.cpf = interprete.cpf.replace(/\D/g, "");
      const interpreteExistente = await this._interpreteRepository.getByCpf(
        interprete.cpf
      );

      if (interpreteExistente) {
        throw new BadResquestError("CPF já cadastrado");
      }
    }
    const novoInterprete = await this._interpreteRepository.post(interprete);
    return { id: novoInterprete.id } as Interprete;
  }

  async getByCpf(cpf: string): Promise<Interprete | null> {
    const interprete = await this._interpreteRepository.getByCpf(cpf);
    return interprete ? interprete : null;
  }

  async getAll(): Promise<Interprete[]> {
    const interpretes = await this._interpreteRepository.getAll();
    return interpretes;
  }

  async getById(id: string): Promise<Interprete | null> {
    const interprete = await this._interpreteRepository.getById(id);
    return interprete ? interprete : null;
  }
}
