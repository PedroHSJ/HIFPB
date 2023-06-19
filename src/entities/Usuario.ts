import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Min, IsEmail, Validate, MinLength } from "class-validator";
import { UsernameValidation } from "../validations/Usuario/usernameValidation";
import { IBase } from "../interfaces/IBase";
import { Role } from "./Role";

@Entity("usuarios")
export class Usuario implements IBase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64, unique: true })
  @Validate(UsernameValidation)
  username: string;

  @Column({ type: "varchar", length: 64 })
  @MinLength(8)
  password?: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @Column({ type: "varchar", length: 255 })
  @IsEmail()
  email: string;

  @ManyToMany(() => Role, (role) => role.usuarios)
  @JoinTable({
    name: "usuarios_roles",
    joinColumn: {
      name: "usuario_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "role_id",
      referencedColumnName: "id",
    }
  })
  roles: Role[];
}
