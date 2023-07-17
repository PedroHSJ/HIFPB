import { Router } from 'express';

import { AulaController } from '../controllers/aulaController';
import aulaValidation from '../middlewares/validations/aulaValidation';
import Container from 'typedi';

const aulaRoutes = Router();
const aulaController = Container.get(AulaController);

aulaRoutes.get('/', aulaController.getAll.bind(aulaController));
aulaRoutes.post('/', aulaValidation, aulaController.post.bind(aulaController));

export { aulaRoutes };
