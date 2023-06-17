import { NextFunction, Request, Response } from "express";
import {
  deleteAlunoService,
  getAllAlunoService,
  getByIdAlunoService,
  postAlunoService,
  putAlunoService,
} from "../services/alunoService";
import { nextTick } from "process";
import { NotFoundError } from "../helpers/api-erros";

const getAllAlunoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const alunos = await getAllAlunoService();
    res.status(200).send(alunos);
  } catch (error) {
    next(error);
  }
};

const getByIdAlunoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const aluno = await getByIdAlunoService(id);
    res.status(200).send(aluno);
  } catch (error) {
    next(error);
  }
};

const postAlunoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const aluno = await postAlunoService(req.body);
    res.status(201).send(aluno);
  } catch (error) {
    next(error);
  }
};

const putAlunoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const aluno = await getByIdAlunoService(id);
    if (!aluno) throw new NotFoundError("Aluno não encontrado");
    const result = await putAlunoService(aluno);
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};

const deleteAlunoController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    await deleteAlunoService(id);
    res.status(204).send("Aluno deletado com sucesso");
  } catch (error) {
    next(error);
  }
};

export {
  getAllAlunoController,
  getByIdAlunoController,
  postAlunoController,
  putAlunoController,
  deleteAlunoController,
};
