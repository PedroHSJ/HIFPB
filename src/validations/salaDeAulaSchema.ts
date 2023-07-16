import * as yup from 'yup';

const salaDeAulaPostSchema = yup.object().shape({
    nome: yup.string().min(3).max(255).required('Nome é obrigatório.'),
    estabelecimento: yup.object().shape({}),
});

export { salaDeAulaPostSchema };
