import * as yup from 'yup';
import { NOME_MAX_LENGTH, NOME_MIN_LENGTH, NOME_REQUIRED } from '../constants';

const salaDeAulaPostSchema = yup.object().shape({
    nome: yup
        .string()
        .min(3, NOME_MIN_LENGTH)
        .max(255, NOME_MAX_LENGTH)
        .required(NOME_REQUIRED),
    estabelecimento: yup.object().shape({}),
});

export { salaDeAulaPostSchema };
