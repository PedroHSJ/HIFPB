import { NextFunction, Request, Response } from "express";
import {
UsuarioService
} from "../services/usuarioService";
import { NotFoundError } from "../helpers/api-erros";

export class UsuarioController{
  getAllUsuarioController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const usuarios = await new UsuarioService().getAllUsuariosService();
      if (usuarios.length === 0)
        return res.status(204).send("Não há usuarios cadastrados");
      res.status(200).send(usuarios);
    } catch (error) {
      next(error);
    }
  };
  
  getByIdUsuarioController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { id } = req.params;
      const usuario = await new UsuarioService().getByIdUsuarioService(id);
      if (!usuario) throw new NotFoundError("Usuario não encontrado");
      res.status(200).send(usuario);
    } catch (error) {
      next(error);
    }
  };
  
  getByUsernameUsuarioController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { username } = req.query;
      const usuario = await new UsuarioService().getByUsernameUsuarioService(username as string);
      if (!usuario) throw new NotFoundError("Usuario não encontrado");
      res.status(200).send(usuario);
    } catch (error) {
      next(error);
    }
  };
  
  postUsuarioController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const usuario = await new UsuarioService().postUsuarioService(req.body);
      res.status(201).send(usuario);
    } catch (error) {
      next(error);
    }
  };
  
  putUsuarioController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const usuario = await new UsuarioService().getByIdUsuarioService(id);
    if (!usuario) throw new NotFoundError("Usuario não encontrado");
    res.status(201).send(usuario);
  };
  
  deleteUsuarioController = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const { id } = req.params;
    const usuario = await new UsuarioService().deleteUsuarioService(id);
    res.status(200).send("Usuário excluído com sucesso");
  };
}