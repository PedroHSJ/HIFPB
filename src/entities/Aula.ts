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
} from 'typeorm';
import { IBase } from '../interfaces/IBase';
import { Interprete } from './Interprete';
import { Aluno } from './Aluno';
import { DiaDaSemana } from './DiaDaSemana';
import { SalaDeAula } from './SalaDeAula';

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

    @ManyToOne(() => DiaDaSemana, { nullable: false })
    @JoinColumn({ name: 'dia_da_semana_id', referencedColumnName: 'id' })
    dia_da_semana: DiaDaSemana;

    @ManyToOne(() => SalaDeAula, { nullable: false })
    @JoinColumn({ name: 'sala_de_aula_id', referencedColumnName: 'id' })
    sala_de_aula: SalaDeAula;
}
