import { hash } from "bcrypt";
import { Usuario } from "../entities/Usuario";
import { BadResquestError } from "../helpers/api-erros";
import { UsuarioRepository } from "../repositories/usuarioRepository";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { Inject, Service } from "typedi";
import { IUsuarioService } from "./interfaces/IUsuarioService";
import { IUsuarioRepository } from "../repositories/interfaces/IUsuarioRepository";


@Service()
export class UsuarioService implements IUsuarioService {
  private _usuarioRepository: IUsuarioRepository;

  constructor(@Inject() usuarioRepository: UsuarioRepository) {
    this._usuarioRepository = usuarioRepository;
  }

  getAll = async (): Promise<Usuario[]> => {
    const usuarios = await this._usuarioRepository.getAll();
    //Removendo a senha do retorno
    usuarios.forEach((usuario) => {
      delete usuario.password;
    });
    return usuarios;
  };

  getById = async (id: string) => {
    if (!id) throw new BadResquestError("Id não informado");
    const usuario = await this._usuarioRepository.getById(id);
    delete usuario?.password;
    return usuario;
  };

  getByUsername = async (username: string) => {
    if (!username) throw new BadResquestError("Username não informado");
    const usuarioEncontrado =
      await this._usuarioRepository.getByUsername(username);
    delete usuarioEncontrado?.password;
    return usuarioEncontrado;
  };

  post = async (usuario: Usuario) => {
    if (!usuario) throw new BadResquestError("Usuario não informado");
    if(!usuario.password) throw new BadResquestError("Senha não informada");
    const usuarioExistente =
      await this._usuarioRepository.getByUsername(
        usuario.username
      );
    if (usuarioExistente) throw new BadResquestError("Usuario já cadastrado");
    const hashPassword = await hash(usuario.password, 10);
    usuario.password = hashPassword;
    //Criando instancia da classe Usuario com 'class-transformer'

    const usuarioClass = plainToClass(Usuario, usuario);
    const errorsValidation = await validate(usuarioClass);
    if (errorsValidation.length > 0)
      throw new BadResquestError(errorsValidation.toString());

    const newUsuario = await this._usuarioRepository.post(
      usuario
    );
    return newUsuario;
  };

  put = async (usuario: Usuario) => {
    if (!usuario) throw new BadResquestError("Usuario não informado");
    if(usuario.password){
      const hashPassword = await hash(usuario.password, 10);
      usuario.password = hashPassword;
    }
    const usuarioEditado = await this._usuarioRepository.put(
      usuario
    );
    return usuarioEditado;
  };

  delete = async (id: string) => {
    if (!id) throw new BadResquestError("Id não informado");
    const usuario = await this._usuarioRepository.getById(id);
    if (!usuario) throw new BadResquestError("Usuario não encontrado");
    await this._usuarioRepository.delete(id);
  };
}
