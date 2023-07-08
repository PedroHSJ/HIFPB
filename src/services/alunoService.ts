import {
  ApiError,
  BadResquestError,
  NotFoundError,
} from "../helpers/api-erros";
import { hash } from "bcrypt";
import { IAlunoService } from "./interfaces/IAlunoService";
import { IAlunoRepository } from "../repositories/interfaces/IAlunoRepository";
import { Aluno } from "../entities/Aluno";
import { AlunoRepository } from "../repositories/alunoRepository";
import { Inject, Service } from "typedi";

@Service()
export class AlunoService implements IAlunoService {
  private alunoRepository: IAlunoRepository;

  constructor(@Inject() alunoRepository: AlunoRepository) {
    this.alunoRepository = alunoRepository;
  }
  getById(id: string): Promise<Aluno | null> {
    const aluno = this.alunoRepository.getById(id);
    return aluno;
  }
  put(aluno: Aluno): Promise<Aluno> {
    const alunoAtualizado = this.alunoRepository.put(aluno);
    return alunoAtualizado;
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<Aluno[]> {
    const alunos = await this.alunoRepository.getAll();
    return alunos;
  }

  async post(aluno: Aluno): Promise<Aluno> {
    const newAluno = await this.alunoRepository.post(aluno);
    return newAluno;
  }
}
