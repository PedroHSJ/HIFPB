import {
    Column,
    Entity,
    ManyToMany,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn,
} from 'typeorm';
import { Usuario } from './Usuario';
import { Interprete } from './Interprete';

@Entity('roles')
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column({ type: 'varchar', length: 64, unique: true })
    nome: string;

    @ManyToMany(() => Usuario, (usuario) => usuario.roles)
    usuarios: Usuario[];
}
