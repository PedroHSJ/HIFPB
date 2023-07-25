import { Service } from 'typedi';
import { AppDataSource } from '../data-source';
import { Role } from '../entities/Role';
import { Usuario } from '../entities/Usuario';
import { Repository } from 'typeorm';
import { IUsuarioRepository } from './interfaces/IUsuarioRepository';
@Service()
export class UsuarioRepository implements IUsuarioRepository {
    repo: Repository<Usuario>;

    constructor() {
        this.repo = AppDataSource.getRepository(Usuario);
    }

    getAll = async (): Promise<Usuario[]> => {
        const usuarios = await this.repo
            .createQueryBuilder('usuario')
            .leftJoinAndSelect('usuario.roles', 'roles')
            .getMany();
        return usuarios;
    };

    getById = async (id: string): Promise<Usuario | null> => {
        const usuario = await this.repo
            .createQueryBuilder('usuario')
            .leftJoinAndSelect('usuario.roles', 'roles')
            .where('usuario.id = :id', { id: id })
            .getOne();

        return usuario ? usuario : null;
    };

    getByUsername = async (username: string): Promise<Usuario | null> => {
        const usuarioEncontrado = await this.repo
            .createQueryBuilder('usuario')
            .leftJoinAndSelect('usuario.roles', 'roles')
            .where('usuario.username = :username', { username: username })
            .getOne();
        return usuarioEncontrado ? usuarioEncontrado : null;
    };

    post = async (usuario: Usuario): Promise<Usuario> => {
        const newUsuario = await this.repo.save(usuario);

        const repoRole = AppDataSource.getRepository(Role);
        usuario.roles?.forEach((role) => {
            repoRole.save(role);
        });
        return { id: newUsuario.id } as Usuario;
    };

    put = async (usuario: Usuario): Promise<Usuario> => {
        const newUsuario = await this.repo.save(usuario);
        return { id: usuario.id } as Usuario;
    };

    delete = async (id: string): Promise<void> => {
        //soft delete
        await this.repo.update(id, { ativo: 0 } as Usuario);
    };
}
