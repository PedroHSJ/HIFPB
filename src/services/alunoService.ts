import {
  ApiError,
  BadResquestError,
  NotFoundError,
} from "../helpers/api-erros";
import {
  getAllAlunoRepository,
  getByIdAlunoRepository,
  postAlunoRepository,
  putAlunoRepository,
  deleteAlunoRepository,
} from "../repositories/alunoRepository";
import { hash } from "bcrypt";

const getAllAlunoService = async () => {
  const alunos = await getAllAlunoRepository();
  return alunos;
};

const getByIdAlunoService = async (id: string) => {
  if (!id) throw new Error("Id não informado");
  const aluno = await getByIdAlunoRepository(id);
  return aluno;
};

const postAlunoService = async (aluno: any) => {
  if (!aluno) throw new Error("Aluno não informado");
  const newAluno = await postAlunoRepository(aluno);
  return newAluno;
};

const putAlunoService = async (aluno: any) => {
  if (!aluno) throw new BadResquestError("Aluno não informado");
  const newAluno = await putAlunoRepository(aluno);
  return newAluno;
};

const deleteAlunoService = async (id: string) => {
  // verificando se o aluno existe
  if (!id) throw new BadResquestError("Id não informado");
  const aluno = await getByIdAlunoRepository(id);
  if (!aluno) throw new NotFoundError("Aluno não encontrado");
  await deleteAlunoRepository(id);
};

export {
  getAllAlunoService,
  getByIdAlunoService,
  postAlunoService,
  putAlunoService,
  deleteAlunoService,
};
