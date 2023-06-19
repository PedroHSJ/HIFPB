import { hash } from "bcrypt";
import { Usuario } from "../entities/Usuario";
import { BadResquestError } from "../helpers/api-erros";
import { UsuarioRepository } from "../repositories/usuarioRepository";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";

export class UsuarioService {
  getAllUsuariosService = async (): Promise<Usuario[]> => {
    const usuarios = await new UsuarioRepository().getAllUsuariosRepository();
    //Removendo a senha do retorno
    usuarios.forEach((usuario) => {
      delete usuario.password;
    });
    return usuarios;
  };

  getByIdUsuarioService = async (id: string) => {
    if (!id) throw new BadResquestError("Id não informado");
    const usuario = await new UsuarioRepository().getByIdUsuarioRepository(id);
    delete usuario?.password;
    return usuario;
  };

  getByUsernameUsuarioService = async (username: string) => {
    if (!username) throw new BadResquestError("Username não informado");
    const usuarioEncontrado =
      await new UsuarioRepository().getByUsernameUsuarioRepository(username);
    delete usuarioEncontrado?.password;
    return usuarioEncontrado;
  };

  postUsuarioService = async (usuario: Usuario) => {
    if (!usuario) throw new BadResquestError("Usuario não informado");
    if(!usuario.password) throw new BadResquestError("Senha não informada");
    const usuarioExistente =
      await new UsuarioRepository().getByUsernameUsuarioRepository(
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

    const newUsuario = await new UsuarioRepository().postUsuarioRepository(
      usuario
    );
    return newUsuario;
  };

  putUsuarioService = async (usuario: Usuario) => {
    if (!usuario) throw new BadResquestError("Usuario não informado");

    const usuarioEditado = await new UsuarioRepository().putUsuarioRepository(
      usuario
    );
    return usuarioEditado;
  };

  deleteUsuarioService = async (id: string) => {
    if (!id) throw new BadResquestError("Id não informado");
    const usuario = await new UsuarioRepository().getByIdUsuarioRepository(id);
    if (!usuario) throw new BadResquestError("Usuario não encontrado");
    await new UsuarioRepository().deleteUsuarioRepository(id);
  };
}
