import { Inject, Service } from 'typedi';
import { Aula } from '../entities/Aula';
import { BadResquestError } from '../helpers/api-erros';
import { AulaRepository } from '../repositories/aulaRepository';
import { IAulaRepository } from '../repositories/interfaces/IAulaRepository';
import { IAulaService } from './interfaces/IAulaService';
import { Console } from 'console';

@Service()
export class AulaService implements IAulaService {
    aulaRepository: IAulaRepository;

    constructor(@Inject() aulaRepository: AulaRepository) {
        this.aulaRepository = aulaRepository;
    }
    async getByDiaDaSemana(dia_da_semana: string): Promise<Aula> {
        const aula = await this.aulaRepository.getByDiaDaSemana(dia_da_semana);
        return aula;
    }

    async post(aula: Aula): Promise<Aula> {
        // const dia = await this.aulaRepository.getByDiaDaSemana(
        //     aula.dia_da_semana
        // );
        const novaAula = await this.aulaRepository.post(aula);
        return novaAula;
    }
    async getAll(): Promise<Aula[]> {
        const aulas = await this.aulaRepository.getAll();
        return aulas;
    }
}
