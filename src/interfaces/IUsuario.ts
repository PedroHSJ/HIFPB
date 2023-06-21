import { Role } from "../entities/Role";

export interface IUsuario{
  id: string;

  username: string;

  password?: string;

  data_criacao: Date;

  data_alteracao: Date;

  email: string;

  roles: Role[];

  ativo: number;
}