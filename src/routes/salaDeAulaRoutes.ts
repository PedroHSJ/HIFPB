import { Router } from 'express';

import { SalaDeAulaController } from '../controllers/salaDeAulaController';
import Container from 'typedi';
import salaDeAulaValidation from '../middlewares/validations/salaDeAulaValidation';

const salaDeAulaRoutes = Router();
const salaDeAulaController = Container.get(SalaDeAulaController);

salaDeAulaRoutes.get(
    '/',
    salaDeAulaController.getAll.bind(salaDeAulaController)
);
salaDeAulaRoutes.post(
    '/',
    salaDeAulaValidation,
    salaDeAulaController.post.bind(salaDeAulaController)
);

export { salaDeAulaRoutes };
