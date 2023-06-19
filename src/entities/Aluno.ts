import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  BaseEntity,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Interprete } from "./Interprete";
import { IBase } from "../interfaces/IBase";

@Entity("alunos")
export class Aluno implements IBase {
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

  @ManyToMany(() => Interprete, (interprete) => interprete.alunos)
  @JoinTable({
    name: "alunos_interpretes",
    joinColumn: {
      name: "aluno_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "interprete_id",
      referencedColumnName: "id",
    }
  })
  interprete: Interprete[];
}
