import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DiaDaSemana } from "./DiaDaSemana";
import { Aluno } from "./Aluno";
import { IBase } from "../interfaces/IBase";
import { SalaDeAula } from "./SalaDeAula";

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

  @ManyToMany(() => Aluno, (aluno) => aluno.interprete)
  alunos: Aluno[];
}
