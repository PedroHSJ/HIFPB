import { hash } from "bcrypt";
import { Usuario } from "../entities/Usuario";
import { BadResquestError } from "../helpers/api-erros";
import {
  getAllUsuariosRepository,
  getByIdUsuarioRepository,
  getByUsernameUsuarioRepository,
  postUsuarioRepository,
  putUsuarioRepository,
} from "../repositories/usuarioRepository";

const getAllUsuariosService = async () => {
  const usuarios = await getAllUsuariosRepository();
  return usuarios;
};

const getByIdUsuarioService = async (id: string) => {
  if (!id) throw new BadResquestError("Id não informado");
  const usuario = await getByIdUsuarioRepository(id);
  return usuario;
};

const getByUsernameUsuarioService = async (usuario: Usuario) => {
  if (!usuario) throw new BadResquestError("Usuario não informado");
  const usuarioEncontrado = await getByUsernameUsuarioRepository(
    usuario.username
  );
  return usuarioEncontrado;
};

const postUsuarioService = async (usuario: Usuario) => {
  if (!usuario) throw new BadResquestError("Usuario não informado");
  const usuarioExistente = await getByUsernameUsuarioRepository(
    usuario.username
  );
  if (usuarioExistente) throw new BadResquestError("Usuario já cadastrado");
  const hashPassword = await hash(usuario.password, 10);
  usuario.password = hashPassword;
  const newUsuario = await postUsuarioRepository(usuario);
  return newUsuario;
};

const putUsuarioService = async (usuario: Usuario) => {
  if (!usuario) throw new BadResquestError("Usuario não informado");
  const newUsuario = await putUsuarioRepository(usuario);
  return newUsuario;
};

const deleteUsuarioService = async (id: string) => {
  if (!id) throw new BadResquestError("Id não informado");
  const usuario = await getByIdUsuarioRepository(id);
  if (!usuario) throw new BadResquestError("Usuario não encontrado");
  await deleteUsuarioService(id);
};

export {
  getAllUsuariosService,
  getByIdUsuarioService,
  getByUsernameUsuarioRepository,
  postUsuarioService,
  putUsuarioService,
  deleteUsuarioService,
};
