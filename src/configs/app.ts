import express, { NextFunction, Request, Response } from 'express';
import {
    alunoRoutes,
    authRoutes,
    estabelecimentoRoutes,
    usuarioRoutes,
    salaDeAulaRoutes,
    interpreteRoutes,
    aulaRoutes,
} from '../routes';
import { errorMiddleware } from '../middlewares/error';
import validateToken from '../middlewares/authMiddleware';
import swaggerUi from 'swagger-ui-express';
import swaggerSpecs from '../../swagger-config.json'; // Importe o arquivo criado no passo 3

const app = express();

app.use(express.json());

//swagger
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpecs, { explorer: true })
);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    next();
});

app.use('/usuario', usuarioRoutes);
app.use('/auth', authRoutes);
app.use('/estabelecimento', estabelecimentoRoutes);
app.use('/salaDeAula', salaDeAulaRoutes);
app.use('/aluno', alunoRoutes);
app.use('/interprete', interpreteRoutes);
app.use('/aula', aulaRoutes);

//Interceptando erros
app.use(errorMiddleware);

// Interceptador de erros
// app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
//   if (error instanceof Error) {
//     return res.status(400).json({ message: error.message });
//   }
//   return res.status(500).json({ message: "Erro interno do servidor" });
// });

export default app;
