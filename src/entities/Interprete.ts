import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { DiaDaSemana } from "./DiaDaSemana";
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

  @OneToMany(() => DiaDaSemana, (dia_da_semana) => dia_da_semana.interprete)
  dias_da_semana: DiaDaSemana[];

  @OneToMany(() => Aluno, (aluno) => aluno.interprete)
  alunos: Aluno[];
}
