import { Inject, Service } from 'typedi';
import { AppDataSource } from '../data-source';
import { SalaDeAula } from '../entities/SalaDeAula';
import { SalaDeAulaRepository } from '../repositories/salaDeAulaRepository';
import { ISalaDeAulaRepository } from '../repositories/interfaces/ISalaDeAulaRepository';

@Service()
export class SalaDeAulaService {
    private salaDeAulaRepository: ISalaDeAulaRepository;

    constructor(@Inject() salaDeAulaRepository: SalaDeAulaRepository) {
        this.salaDeAulaRepository = salaDeAulaRepository;
    }

    async getAll(): Promise<SalaDeAula[]> {
        const salasDeAulas = await this.salaDeAulaRepository.getAll();
        return salasDeAulas;
    }
    async post(salaDeAulas: SalaDeAula): Promise<SalaDeAula> {
        const novaSalaDeAulas = await this.salaDeAulaRepository.post(
            salaDeAulas
        );
        return { id: novaSalaDeAulas.id } as SalaDeAula;
    }
}
