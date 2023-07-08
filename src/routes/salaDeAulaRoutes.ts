import { Router } from 'express';

import { SalaDeAulaController } from '../controllers/salaDeAulaController';
import Container from 'typedi';

const salaDeAulaRoutes = Router();
const salaDeAulaController = Container.get(SalaDeAulaController);

salaDeAulaRoutes.get(
    '/',
    salaDeAulaController.getAll.bind(salaDeAulaController)
);
salaDeAulaRoutes.post(
    '/',
    salaDeAulaController.post.bind(salaDeAulaController)
);

export { salaDeAulaRoutes };
