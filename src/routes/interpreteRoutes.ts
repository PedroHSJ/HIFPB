import { Router } from 'express';
import { InterpreteController } from '../controllers/interpreteController';
import Container from 'typedi';
import interpreteValidation from '../middlewares/validations/interpreteValidation';
const interpreteRoutes = Router();
const interpreteController = Container.get(InterpreteController);

interpreteRoutes.post(
    '/',
    interpreteValidation,
    interpreteController.post.bind(interpreteController)
);
interpreteRoutes.get(
    '/:id',
    interpreteController.getById.bind(interpreteController)
);
interpreteRoutes.get(
    '/',
    interpreteController.getAll.bind(interpreteController)
);
interpreteRoutes.put(
    '/:id',
    interpreteController.put.bind(interpreteController)
);

export { interpreteRoutes };
