import { Usuario } from "../../entities/Usuario";

export interface IUsuarioRepository {
    getAll: () => Promise<Usuario[]>;
    getById: (id: string) => Promise<Usuario | null>;
    getByUsername: (username: string) => Promise<Usuario | null>;
    post: (usuario: Usuario) => Promise<Usuario>;
    put: (usuario: Usuario) => Promise<Usuario>;
    delete: (id: string) => Promise<void>;
}