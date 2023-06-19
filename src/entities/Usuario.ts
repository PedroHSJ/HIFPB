import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { Min, IsEmail, Validate } from "class-validator";
import { UsernameValidation } from "../validations/Usuario/usernameValidation";
import { IBase } from "../interfaces/IBase";

@Entity("usuarios")
export class Usuario implements IBase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64, unique: true })
  @Validate(UsernameValidation)
  username: string;

  @Column({ type: "varchar", length: 64 })
  @Min(8)
  password: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @Column({ type: "varchar", length: 255 })
  @IsEmail()
  email: string;
}
