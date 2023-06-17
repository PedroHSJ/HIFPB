import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { SalaDeAula } from "./SalaDeAula";

@Entity("estabelecimentos")
export class Estabelecimento {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @OneToMany(() => SalaDeAula, (sala_de_aula) => sala_de_aula.estabelecimento)
  salas_de_aula: SalaDeAula[];
}
