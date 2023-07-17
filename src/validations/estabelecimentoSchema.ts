import * as yup from 'yup';
import {
    CNPJ_HAS_lENGTH,
    CNPJ_REQUIRED,
    NOME_MAX_LENGTH,
    NOME_MIN_LENGTH,
    NOME_REQUIRED,
} from '../constants';

const estabelecimentoPostSchema = yup.object().shape({
    nome: yup
        .string()
        .min(3, NOME_MIN_LENGTH)
        .max(255, NOME_MAX_LENGTH)
        .required(NOME_REQUIRED),
    cnpj: yup.string().length(14, CNPJ_HAS_lENGTH).required(CNPJ_REQUIRED),
    salas_de_aula: yup.array().of(yup.string().uuid()),
});

export { estabelecimentoPostSchema };
