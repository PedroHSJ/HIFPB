import { NextFunction, Request, Response } from "express";
import {
  getAllUsuariosService,
  getByIdUsuarioService,
  postUsuarioService,
  putUsuarioService,
  deleteUsuarioService,
} from "../services/usuarioService";
import { NotFoundError } from "../helpers/api-erros";

const getAllUsuarioController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const usuarios = await getAllUsuariosService();
    if (usuarios.length === 0)
      return res.status(204).send("Não há usuarios cadastrados");
    res.status(200).send(usuarios);
  } catch (error) {
    next(error);
  }
};

const getByIdUsuarioController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const usuario = await getByIdUsuarioService(id);
    if (!usuario) throw new NotFoundError("Usuario não encontrado");
    res.status(200).send(usuario);
  } catch (error) {
    next(error);
  }
};

const getByUsernameUsuarioController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const usuario = await postUsuarioService(req.body);
    if (!usuario) throw new NotFoundError("Usuario não encontrado");
    res.status(200).send(usuario);
  } catch (error) {
    next(error);
  }
};

const postUsuarioController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const usuario = await postUsuarioService(req.body);
    res.status(201).send(usuario);
  } catch (error) {
    next(error);
  }
};

const putUsuarioController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const usuario = await getByIdUsuarioService(id);
  if (!usuario) throw new NotFoundError("Usuario não encontrado");
  res.status(201).send(usuario);
};

const deleteUsuarioController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const usuario = await deleteUsuarioService(id);
  res.status(200).send("Usuário excluído com sucesso");
};

export {
  getAllUsuarioController,
  getByIdUsuarioController,
  postUsuarioController,
  putUsuarioController,
  deleteUsuarioController,
};
