import { Router } from 'express';

import { EstabelecimentoController } from '../controllers/estabelecimentoController';
import estabelecimentoValidation from '../middlewares/validations/estabelecimentoValidation';

const estabelecimentoRoutes = Router();
estabelecimentoRoutes.get('/', new EstabelecimentoController().getAll);
estabelecimentoRoutes.post(
    '/',
    estabelecimentoValidation,
    new EstabelecimentoController().post
);

export { estabelecimentoRoutes };
