import { Service } from 'typedi';
import { AppDataSource } from '../data-source';
import { SalaDeAula } from '../entities/SalaDeAula';
import { Repository } from 'typeorm';
import { ISalaDeAulaRepository } from './interfaces/ISalaDeAulaRepository';

@Service()
export class SalaDeAulaRepository implements ISalaDeAulaRepository {
    repo: Repository<SalaDeAula>;

    constructor() {
        this.repo = AppDataSource.getRepository(SalaDeAula);
    }

    async getAll(): Promise<SalaDeAula[]> {
        const salasDeAulas = this.repo
            .createQueryBuilder('salas_de_aula')
            .leftJoinAndSelect(
                'salas_de_aula.estabelecimento',
                'estabelecimento'
            )
            .getMany();

        return salasDeAulas;
    }
    async post(salaDeAulas: SalaDeAula): Promise<SalaDeAula> {
        const novaSalaDeAula = await this.repo.save(salaDeAulas);
        return { id: novaSalaDeAula.id } as SalaDeAula;
    }
}
