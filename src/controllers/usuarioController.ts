import { NextFunction, Request, Response } from "express";
import { UsuarioService } from "../services/usuarioService";
import { NotFoundError } from "../helpers/api-erros";
import { hash } from "bcrypt";
import { Inject, Service } from "typedi";
import { IUsuarioService } from "../services/interfaces/IUsuarioService";

@Service()
export class UsuarioController {
  private _usuarioService: IUsuarioService;

  constructor(@Inject() usuarioService: UsuarioService) {
    this._usuarioService = usuarioService;
  }
  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usuarios = await this._usuarioService.getAll();
      if (usuarios.length === 0)
        return res.status(204).send("Não há usuarios cadastrados");
      res.status(200).send(usuarios);
    } catch (error) {
      next(error);
    }
  };

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const usuario = await this._usuarioService.getById(id);
      if (!usuario) throw new NotFoundError("Usuario não encontrado");
      res.status(200).send(usuario);
    } catch (error) {
      next(error);
    }
  };

  getByUsername = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { username } = req.params;
      const usuario = await this._usuarioService.getByUsername(
        username as string
      );
      if (!usuario) throw new NotFoundError("Usuario não encontrado");
      delete usuario.password;
      res.status(200).send(usuario);
    } catch (error) {
      next(error);
    }
  };

  post = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const usuario = await this._usuarioService.post(req.body);
      res.status(201).send(usuario);
    } catch (error) {
      next(error);
    }
  };

  put = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const usuario = await this._usuarioService.getById(id);
    if (!usuario) throw new NotFoundError("Usuario não encontrado");
    const usuarioBody = req.body;
    usuarioBody.id = id;
    const usuarioEditado = await this._usuarioService.put(usuarioBody);
    res.status(200).send(usuarioEditado);
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const usuario = await this._usuarioService.delete(id);
    res.status(200).send("Usuário excluído com sucesso");
  };
}
