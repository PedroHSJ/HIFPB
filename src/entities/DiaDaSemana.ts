import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Interprete } from "./Interprete";
import { SalaDeAula } from "./SalaDeAula";
import { IBase } from "../interfaces/IBase";
import { Aula } from "./Aula";	

@Entity("dias_da_semana")
export class DiaDaSemana implements IBase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({unique: true})
  nome: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @OneToMany(() => Aula, aula => aula.diasDaSemana)
  aulas: Aula[];
}