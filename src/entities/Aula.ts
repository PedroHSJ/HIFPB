import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { IBase } from "../interfaces/IBase";
import { Interprete } from "./Interprete";
import { Aluno } from "./Aluno";
import { DiaDaSemana } from "./DiaDaSemana";
import { SalaDeAula } from "./SalaDeAula";

@Entity("aulas")
export class Aula implements IBase {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @CreateDateColumn()
  data_criacao: Date;

  @UpdateDateColumn()
  data_alteracao: Date;

  @ManyToOne(() => Aluno)
  @JoinColumn({ name: 'aluno_id', referencedColumnName: 'id' })
  aluno: Aluno;

  @ManyToOne(() => DiaDaSemana)
  @JoinColumn({ name: 'dia_da_semana_id', referencedColumnName: 'id' })
  dia_da_semana: DiaDaSemana;

  @ManyToOne(() => SalaDeAula)
  @JoinColumn({ name: 'sala_de_aula_id', referencedColumnName: 'id' })
  sala_de_aula: SalaDeAula;

  valide: boolean;

  validate(): boolean{
    return false;
  }
}
