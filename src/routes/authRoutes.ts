import { Router } from 'express';
import Container from 'typedi';
import { AuthController } from '../controllers/security/authController';

const authRoutes = Router();
const authController = Container.get(AuthController);
authRoutes.post('/', authController.auth.bind(authController));
authRoutes.post(
    '/interprete',
    authController.authInterprete.bind(authController)
);

export default authRoutes;
