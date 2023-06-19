import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Interprete } from "./Interprete";
import { SalaDeAula } from "./SalaDeAula";
import { IBase } from "../interfaces/IBase";

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

  @ManyToOne(() => Interprete, (interprete) => interprete.dias_da_semana)
  interprete: Interprete;

  @ManyToMany(() => SalaDeAula, (sala_de_aula) => sala_de_aula.dias_da_semana)
  salas_de_aula: SalaDeAula[];
}
