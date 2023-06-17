import { Aluno } from "../entities/Aluno";
import { AppDataSource } from "../data-source";

const getAllAlunoRepository = async (): Promise<Aluno[]> => {
  const repo = AppDataSource.getRepository(Aluno);
  const alunos = await repo.find();
  return alunos;
};

const getByIdAlunoRepository = async (id: string): Promise<Aluno | null> => {
  const repo = AppDataSource.getRepository(Aluno);
  const aluno = await repo.findOne({ where: { id: id } });

  return aluno ? aluno : null;
};

const postAlunoRepository = async (aluno: Aluno): Promise<Aluno> => {
  const repo = AppDataSource.getRepository(Aluno);
  const newAluno = await repo.save(aluno);
  return newAluno;
};

const putAlunoRepository = async (aluno: Aluno): Promise<Aluno> => {
  const repo = AppDataSource.getRepository(Aluno);
  const newAluno = await repo.update(aluno.id, aluno);
  return newAluno.affected ? aluno : ({} as Aluno);
};

const deleteAlunoRepository = async (id: string): Promise<void> => {
  const repo = AppDataSource.getRepository(Aluno);
  await repo.delete(id);
};

export {
  getAllAlunoRepository,
  getByIdAlunoRepository,
  postAlunoRepository,
  putAlunoRepository,
  deleteAlunoRepository,
};
