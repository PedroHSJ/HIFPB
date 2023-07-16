import * as yup from 'yup';

const estabelecimentoPostSchema = yup.object().shape({
    nome: yup.string().min(3).max(255).required('Nome é obrigatório.'),
    cnpj: yup.string().length(14).required('CNPJ é obrigatório.'),
    salas_de_aula: yup.array().of(yup.string().uuid()),
});

export { estabelecimentoPostSchema };
