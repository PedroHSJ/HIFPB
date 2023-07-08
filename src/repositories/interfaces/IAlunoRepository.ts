import { Aluno } from "../../entities/Aluno";

export interface IAlunoRepository {
  getAll(): Promise<Aluno[]>;
  post(aluno: Aluno): Promise<Aluno>;
  getById(id: string): Promise<Aluno | null>;
  put(aluno: Aluno): Promise<Aluno>;
  delete(id: string): Promise<void>;
}
