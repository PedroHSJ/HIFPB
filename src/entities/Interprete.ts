import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Horario } from "./Horario";

@Entity("interpretes")
export class Interprete {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 255 })
  nome: string;

  @Column({ type: "char", length: 11 })
  cpf: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Horario, (horario) => horario.interprete)
  horarios: Horario[];
}
