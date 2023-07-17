import * as yup from 'yup';
import {
    CPF_HAS_lENGTH,
    CPF_REQUIRED,
    NOME_MAX_LENGTH,
    NOME_MIN_LENGTH,
    NOME_REQUIRED,
} from '../constants';

const alunoPostSchema = yup.object().shape({
    nome: yup
        .string()
        .min(3, NOME_MIN_LENGTH)
        .max(255, NOME_MAX_LENGTH)
        .required(NOME_REQUIRED),
    cpf: yup.string().length(11, CPF_HAS_lENGTH).required(CPF_REQUIRED),
});

export { alunoPostSchema };
