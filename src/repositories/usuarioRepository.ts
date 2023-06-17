import { AppDataSource } from "../data-source";
import { Usuario } from "../entities/Usuario";

const getAllUsuariosRepository = async (): Promise<Usuario[]> => {
  const repo = AppDataSource.getRepository(Usuario);
  const usuarios = await repo.find();
  return usuarios;
};

const getByIdUsuarioRepository = async (
  id: string
): Promise<Usuario | null> => {
  const repo = AppDataSource.getRepository(Usuario);
  const usuario = await repo.findOne({ where: { id: id } });

  return usuario ? usuario : null;
};

const getByUsernameUsuarioRepository = async (
  username: string
): Promise<Usuario | null> => {
  const repo = AppDataSource.getRepository(Usuario);
  const usuarioEncontrado = await repo.findOne({
    where: { username: username },
  });
  return usuarioEncontrado ? usuarioEncontrado : null;
};

const postUsuarioRepository = async (usuario: Usuario): Promise<Usuario> => {
  const repo = AppDataSource.getRepository(Usuario);
  const newUsuario = await repo.save(usuario);
  return { id: newUsuario.id } as Usuario;
};

const putUsuarioRepository = async (usuario: Usuario): Promise<Usuario> => {
  const repo = AppDataSource.getRepository(Usuario);
  const newUsuario = await repo.update(usuario.id, usuario);
  return newUsuario.affected
    ? ({ id: usuario.id } as Usuario)
    : ({} as Usuario);
};

const deleteUsuarioRepository = async (id: string): Promise<void> => {
  const repo = AppDataSource.getRepository(Usuario);
  await repo.delete(id);
};

export {
  getAllUsuariosRepository,
  getByIdUsuarioRepository,
  getByUsernameUsuarioRepository,
  postUsuarioRepository,
  putUsuarioRepository,
  deleteUsuarioRepository,
};
