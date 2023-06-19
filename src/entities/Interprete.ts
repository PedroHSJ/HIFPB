import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Horario } from "./Horario";
import { Aluno } from "./Aluno";
import { IBase } from "../interfaces/IBase";

@Entity("interpretes")
export class Interprete implements IBase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({ type: "char", length: 11 })
  cpf: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @OneToMany(() => Horario, (horario) => horario.interprete)
  horarios: Horario[];

  @OneToMany(() => Aluno, (aluno) => aluno.interprete)
  alunos: Aluno[];
}
