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

@Entity("horarios")
export class Horario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  horario: Date;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @ManyToOne(() => Interprete, (interprete) => interprete.horarios)
  interprete: Interprete;

  @ManyToMany(() => SalaDeAula, (sala_de_aula) => sala_de_aula.horarios)
  salas_de_aula: SalaDeAula[];
}