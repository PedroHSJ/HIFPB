import * as yup from 'yup';
import {
    ALUNO_ID_REQUIRED,
    DIA_DA_SEMANA_ID_REQUIRED,
    DIA_DA_SEMANA_REQUIRED,
    MUST_BE_A_VALID_UUID,
    SALA_DE_AULA_ID_REQUIRED,
} from '../constants';

const aulaSchema = yup.object().shape({
    aluno: yup.object().shape({
        id: yup.string().uuid(MUST_BE_A_VALID_UUID).required(ALUNO_ID_REQUIRED),
    }),
    dia_da_semana: yup.string().required(DIA_DA_SEMANA_REQUIRED),
    sala_de_aula: yup.object().shape({
        id: yup
            .string()
            .uuid(MUST_BE_A_VALID_UUID)
            .required(SALA_DE_AULA_ID_REQUIRED),
    }),
});

export { aulaSchema };
