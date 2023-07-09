import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
} from 'typeorm';
import { SalaDeAula } from './SalaDeAula';

import {
    IsNotEmpty,
    IsString,
    Matches,
    Max,
    MaxLength,
    Min,
    MinLength,
} from 'class-validator';
import { IBase } from '../interfaces/IBase';

@Entity('estabelecimentos')
export class Estabelecimento implements IBase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255 })
    nome: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @OneToMany(() => SalaDeAula, (sala_de_aula) => sala_de_aula.estabelecimento)
    salas_de_aula: SalaDeAula[];

    @Column({ type: 'varchar', length: 14, unique: true })
    cnpj: string;
}
