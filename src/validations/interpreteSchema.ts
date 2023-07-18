import * as yup from 'yup';
import {
    CPF_HAS_lENGTH,
    CPF_REQUIRED,
    NOME_MAX_LENGTH,
    NOME_MIN_LENGTH,
    NOME_REQUIRED,
    PASSWORD_MIN_LENGTH,
    PASSWORD_REQUIRED,
    USERNAME_MAX_LENGTH,
    USERNAME_MIN_LENGTH,
    USERNAME_REQUIRED,
} from '../constants';

const interpretePostSchema = yup.object().shape({
    nome: yup
        .string()
        .min(3, NOME_MIN_LENGTH)
        .max(255, NOME_MAX_LENGTH)
        .required(NOME_REQUIRED),
    cpf: yup.string().length(11, CPF_HAS_lENGTH).required(CPF_REQUIRED),
    username: yup
        .string()
        .min(3, USERNAME_MIN_LENGTH)
        .max(64, USERNAME_MAX_LENGTH)
        .required(USERNAME_REQUIRED),
    password: yup
        .string()
        .min(8, PASSWORD_MIN_LENGTH)
        .required(PASSWORD_REQUIRED),
    alunos: yup.array().of(yup.string().uuid().required()),
});

export { interpretePostSchema };
