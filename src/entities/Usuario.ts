import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

import { IBase } from '../interfaces/IBase';
import { Role } from './Role';

@Entity('usuarios')
export class Usuario implements IBase {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 64, unique: true })
    username: string;

    @Column({ type: 'varchar', length: 64 })
    password?: string;

    @CreateDateColumn()
    data_criacao: Date;

    @UpdateDateColumn()
    data_alteracao: Date;

    @Column({ type: 'varchar', length: 255 })
    email: string;

    @ManyToMany(() => Role, (role) => role.usuarios)
    @JoinTable({
        name: 'usuarios_roles',
        joinColumn: {
            name: 'usuario_id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'role_id',
            referencedColumnName: 'id',
        },
    })
    roles: Role[];

    @Column({ type: 'bit', default: 1 })
    ativo: number;
}
