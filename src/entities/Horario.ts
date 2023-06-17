import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Interprete } from "./Interprete";

@Entity("horarios")
export class Horario {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    data: Date;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Interprete, interprete => interprete.horarios)
    interprete: Interprete;
}