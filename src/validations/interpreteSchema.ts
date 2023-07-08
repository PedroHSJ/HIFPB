import * as yup from "yup";

const interpretePostSchema = yup.object().shape({
  nome: yup.string().max(255).required("Nome é obrigatório."),
  cpf: yup.string().length(11).required("CPF é obrigatório."),
  alunos: yup.array().of(yup.string().uuid().required()),
});

export { interpretePostSchema };
