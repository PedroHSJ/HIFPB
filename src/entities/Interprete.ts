import {
    Column,
    CreateDateColumn,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import { DiaDaSemana } from './DiaDaSemana';
import { Aluno } from './Aluno';
import { IBase } from '../interfaces/IBase';
import { SalaDeAula } from './SalaDeAula';
import { IUsuario } from '../interfaces/IUsuario';
import { Role } from './Role';

@Entity('interpretes')
export class Interprete implements IBase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    nome: string;

    @Column({ type: 'char', length: 11, unique: true })
    cpf: string;

    @Column({ type: 'varchar', length: 64, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 255 })
    password: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @ManyToMany(() => Aluno, (aluno) => aluno.interpretes)
    alunos: Aluno[];
}
