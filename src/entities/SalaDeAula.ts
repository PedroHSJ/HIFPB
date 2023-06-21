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
import { DiaDaSemana } from "./DiaDaSemana";
import { Estabelecimento } from "./Estabelecimento";
import { IBase } from "../interfaces/IBase";
import { Aula } from "./Aula";

@Entity("salas_de_aula")
export class SalaDeAula implements IBase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @ManyToOne(
    () => Estabelecimento,
    (estabelecimento) => estabelecimento.salas_de_aula
  )
  estabelecimento: Estabelecimento;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @OneToMany(() => Aula, aula => aula.sala_de_aula)
  aulas: Aula[];
}
