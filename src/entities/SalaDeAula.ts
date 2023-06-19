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
import { Horario } from "./Horario";
import { Estabelecimento } from "./Estabelecimento";
import { IBase } from "../interfaces/IBase";

@Entity("salas_de_aula")
export class SalaDeAula implements IBase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @ManyToMany(() => Horario, (horario) => horario.salas_de_aula)
  @JoinTable({
    name: "horarios_salas_de_aula",
    joinColumn: {
      name: "horario_id",
      referencedColumnName: "id",
    },
    inverseJoinColumn: {
      name: "sala_de_aula_id",
      referencedColumnName: "id",
    },
  })
  horarios: Horario[];

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
