import { Inject, Service } from 'typedi';
import { AppDataSource } from '../data-source';
import { SalaDeAula } from '../entities/SalaDeAula';
import { SalaDeAulaRepository } from '../repositories/salaDeAulaRepository';
import { ISalaDeAulaRepository } from '../repositories/interfaces/ISalaDeAulaRepository';
import { SalaDeAulaDTO } from '../dtos/SalaDeAulaDTO';
import { plainToClass } from 'class-transformer';

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
    async post(salaDeAulaDTO: SalaDeAulaDTO): Promise<SalaDeAula> {
        const salaDeAula = plainToClass(SalaDeAula, salaDeAulaDTO);
        const novaSalaDeAulas = await this.salaDeAulaRepository.post(
            salaDeAula
        );
        return { id: novaSalaDeAulas.id } as SalaDeAula;
    }
}
