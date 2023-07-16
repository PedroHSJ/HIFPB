import { Estabelecimento } from '../entities/Estabelecimento';
import { EstabelecimentoRepository } from '../repositories/estabelecimentoRepository';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { BadResquestError, ValidationApiError } from '../helpers/api-erros';
import { json } from 'express';
export class EstabelecimentoService {
    constructor() {}

    async getAll(): Promise<Estabelecimento[]> {
        const estabelecimentos = await new EstabelecimentoRepository().getAll();
        return estabelecimentos;
    }
    async post(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
        const errors = await validate(estabelecimento);
        if (errors.length > 0) throw new ValidationApiError(errors);
        console.log(errors);
        //Tirando caracteres especiais do CNPJ
        estabelecimento.cnpj = estabelecimento.cnpj.replace(/[^\d]+/g, '');
        estabelecimento.nome = estabelecimento.nome.toUpperCase().trim();
        const newEstabelecimento = await new EstabelecimentoRepository().post(
            estabelecimento
        );
        return newEstabelecimento;
    }
}
