import { Estabelecimento } from '../entities/Estabelecimento';
import { EstabelecimentoRepository } from '../repositories/estabelecimentoRepository';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { BadResquestError, ValidationApiError } from '../helpers/api-erros';
import { json } from 'express';
import { IEstabelecimentoService } from './interfaces/IEstabelecimentoService';
import { Inject, Service } from 'typedi';
import { IEstabelecimentoRepository } from '../repositories/interfaces/IEstabelecimentoRepository';
@Service()
export class EstabelecimentoService implements IEstabelecimentoService {
    estabelecimentoRepository: IEstabelecimentoRepository;

    constructor(
        @Inject() estabelecimentoRepository: EstabelecimentoRepository
    ) {
        this.estabelecimentoRepository = estabelecimentoRepository;
    }

    async getAll(): Promise<Estabelecimento[]> {
        const estabelecimentos = await this.estabelecimentoRepository.getAll();
        return estabelecimentos;
    }
    async post(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
        //Tirando caracteres especiais do CNPJ
        estabelecimento.cnpj = estabelecimento.cnpj.replace(/[^\d]+/g, '');
        estabelecimento.nome = estabelecimento.nome.toUpperCase().trim();
        const newEstabelecimento = await this.estabelecimentoRepository.post(
            estabelecimento
        );
        return newEstabelecimento;
    }
}
