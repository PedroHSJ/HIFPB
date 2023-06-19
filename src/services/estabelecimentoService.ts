import { Estabelecimento } from "../entities/Estabelecimento";
import { EstabelecimentoRepository } from "../repositories/estabelecimentoRepository";
import { validate } from "class-validator";
import { plainToClass } from "class-transformer";
import { ValidationError } from "../helpers/api-erros";
export class EstabelecimentoService {
  constructor() {}

  async getAll(): Promise<Estabelecimento[]> {
    const estabelecimentos = await new EstabelecimentoRepository().getAll();
    return estabelecimentos;
  }
  async post(estabelecimento: Estabelecimento): Promise<Estabelecimento> {
    //Tirando caracteres especiais do CNPJ
    estabelecimento.cnpj = estabelecimento.cnpj.replace(/[^\d]+/g, "");
    const newEstabelecimento = await new EstabelecimentoRepository().post(
      estabelecimento
    );
    return newEstabelecimento;
  }
}
