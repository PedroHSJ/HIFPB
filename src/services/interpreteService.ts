import { Inject, Service } from 'typedi';
import { AppDataSource } from '../data-source';
import { Interprete } from '../entities/Interprete';
import { BadResquestError } from '../helpers/api-erros';
import { InterpreteRepository } from '../repositories/interpreteRepository';
import { IInterpreteService } from './interfaces/IInterpreteService';
import { IInterpreteRepository } from '../repositories/interfaces/IInterpreteRepository';
import { IAlunoRepository } from '../repositories/interfaces/IAlunoRepository';
import { AlunoRepository } from '../repositories/alunoRepository';
import { InterpreteDTO } from '../dtos/InterpreteDTO';
import { Aluno } from '../entities/Aluno';
import { plainToClass } from 'class-transformer';
import { hash } from 'bcrypt';

@Service()
export class InterpreteService implements IInterpreteService {
    private _interpreteRepository: IInterpreteRepository;
    private _alunoRepository: IAlunoRepository;

    constructor(
        @Inject() interpreteRepository: InterpreteRepository,
        @Inject() alunoRepository: AlunoRepository
    ) {
        this._interpreteRepository = interpreteRepository;
        this._alunoRepository = alunoRepository;
    }
    async put(interpreteDTO: InterpreteDTO, id: string): Promise<number> {
        const interpreteExistente = await this._interpreteRepository.getById(
            id
        );
        if (!interpreteExistente) {
            throw new BadResquestError('Interprete não encontrado');
        }

        // interpreteDTO.alunos?.forEach(async (aluno, index) => {
        //     const alunoExistente = await this._alunoRepository.getById(
        //         interpreteDTO.alunos[index].id
        //     );
        //     if (!alunoExistente) {
        //         throw new BadResquestError('Aluno não encontrado');
        //     }
        //     interpreteDTO.alunos[index] = alunoExistente as Aluno;
        // });

        const interprete = plainToClass(Interprete, interpreteDTO);
        const rowsAffected = await this._interpreteRepository.put(
            interprete,
            id
        );
        return rowsAffected;
    }

    async post(interprete: Interprete): Promise<Interprete> {
        if (interprete.cpf) {
            interprete.cpf = interprete.cpf.replace(/\D/g, '');
            const interpreteExistente =
                await this._interpreteRepository.getByCpf(interprete.cpf);

            if (interpreteExistente) {
                throw new BadResquestError('CPF já cadastrado');
            }
        }
        const senha = await hash(interprete.password, 10);
        interprete.password = senha;
        const novoInterprete = await this._interpreteRepository.post(
            interprete
        );
        return { id: novoInterprete.id } as Interprete;
    }

    async getByCpf(cpf: string): Promise<Interprete | null> {
        const interprete = await this._interpreteRepository.getByCpf(cpf);
        return interprete ? interprete : null;
    }

    async getAll(): Promise<Interprete[]> {
        const interpretes = await this._interpreteRepository.getAll();
        return interpretes;
    }

    async getById(id: string): Promise<Interprete | null> {
        const interprete = await this._interpreteRepository.getById(id);
        return interprete ? interprete : null;
    }
}
