import { Router } from 'express';

import { EstabelecimentoController } from '../controllers/estabelecimentoController';
import estabelecimentoValidation from '../middlewares/validations/estabelecimentoValidation';
import Container from 'typedi';

const estabelecimentoRoutes = Router();
const estabelecimentoController = Container.get(EstabelecimentoController);
estabelecimentoRoutes.get(
    '/',
    estabelecimentoController.getAll.bind(estabelecimentoController)
);
estabelecimentoRoutes.post(
    '/',
    estabelecimentoValidation,
    estabelecimentoController.post.bind(estabelecimentoController)
);

export { estabelecimentoRoutes };
