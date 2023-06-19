import { hash } from "bcrypt";
import { Usuario } from "../entities/Usuario";
import { BadResquestError } from "../helpers/api-erros";
import {
UsuarioRepository
} from "../repositories/usuarioRepository";

export class UsuarioService{
  getAllUsuariosService = async () => {
    const usuarios = await new UsuarioRepository().getAllUsuariosRepository();
    return usuarios;
  };
  
  getByIdUsuarioService = async (id: string) => {
    if (!id) throw new BadResquestError("Id não informado");
    const usuario = await new UsuarioRepository().getByIdUsuarioRepository(id);
    return usuario;
  };
  
  getByUsernameUsuarioService = async (username: string) => {
    if (!username) throw new BadResquestError("Username não informado");
    const usuarioEncontrado = await new UsuarioRepository().getByUsernameUsuarioRepository(
      username
    );
    return usuarioEncontrado;
  };
  
  postUsuarioService = async (usuario: Usuario) => {
    if (!usuario) throw new BadResquestError("Usuario não informado");
    const usuarioExistente = await new UsuarioRepository().getByUsernameUsuarioRepository(
      usuario.username
    );
    if (usuarioExistente) throw new BadResquestError("Usuario já cadastrado");
    const hashPassword = await hash(usuario.password, 10);
    usuario.password = hashPassword;
    const newUsuario = await new UsuarioRepository().postUsuarioRepository(usuario);
    return newUsuario;
  };
  
  putUsuarioService = async (usuario: Usuario) => {
    if (!usuario) throw new BadResquestError("Usuario não informado");
  
    const newUsuario = await new UsuarioRepository().putUsuarioRepository(usuario);
    return newUsuario;
  };
  
  deleteUsuarioService = async (id: string) => {
    if (!id) throw new BadResquestError("Id não informado");
    const usuario = await new UsuarioRepository().getByIdUsuarioRepository(id);
    if (!usuario) throw new BadResquestError("Usuario não encontrado");
    await new UsuarioRepository().deleteUsuarioRepository(id);
  };
}
