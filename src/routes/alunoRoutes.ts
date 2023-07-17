import { Router } from 'express';
import Container from 'typedi';
import { AlunoController } from '../controllers/alunoController';
import alunoValidation from '../middlewares/validations/alunoValidation';

const alunoRoutes = Router();
const alunoController = Container.get(AlunoController);

alunoRoutes.get('/', alunoController.getAll.bind(alunoController));
alunoRoutes.get('/:id', alunoController.getById.bind(alunoController));
alunoRoutes.post(
    '/',
    alunoValidation,
    alunoController.post.bind(alunoController)
);

export { alunoRoutes };
