import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { IBase } from '../interfaces/IBase';
import { Interprete } from './Interprete';
import { Aluno } from './Aluno';
import { DiaDaSemana } from './DiaDaSemana';
import { SalaDeAula } from './SalaDeAula';
import { DiasDaSemanaEnum } from '../enums/DiasDaSemana';

@Entity('aulas')
export class Aula implements IBase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @ManyToOne(() => Aluno, { nullable: false })
    @JoinColumn({ name: 'aluno_id', referencedColumnName: 'id' })
    aluno: Aluno;

    @Column({ type: 'enum', enum: DiasDaSemanaEnum, unique: true })
    dia_da_semana: DiasDaSemanaEnum;

    @ManyToOne(() => SalaDeAula, { nullable: false })
    @JoinColumn({ name: 'sala_de_aula_id', referencedColumnName: 'id' })
    sala_de_aula: SalaDeAula;

    @Column({ type: 'time' })
    horario: Date;
}
