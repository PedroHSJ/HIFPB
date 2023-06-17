import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
export class Usuario {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ type: "varchar", length: 64, unique: true })
  username: string;

  @Column({ type: "varchar", length: 64 })
  password: string;
}
