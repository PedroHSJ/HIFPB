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

@Entity("salas_de_aula")
export class SalaDeAula implements IBase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @ManyToMany(() => DiaDaSemana, (dia_da_semana) => dia_da_semana.salas_de_aula)
  @JoinTable({
    name: "salas_de_aula_dias_da_semana",
    joinColumn: {
      name: "sala_de_aula_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "dia_da_semana_id",
      referencedColumnName: "id",
    }
  })
  dias_da_semana: DiaDaSemana[];

  @ManyToOne(
    () => Estabelecimento,
    (estabelecimento) => estabelecimento.salas_de_aula
  )
  estabelecimento: Estabelecimento;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;
}
