import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { Interprete } from "./Interprete";

@Entity("alunos")
export class Aluno {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({ type: "char", length: 11, unique: true })
  cpf: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @ManyToOne(() => Interprete, (interprete) => interprete.alunos)
  interprete: Interprete;
}