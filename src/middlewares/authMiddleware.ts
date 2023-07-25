import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { BadResquestError, UnauthorizedError } from '../helpers/api-erros';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) throw new UnauthorizedError('Token não informado');
        const [_bearer, token] = authHeader.split(' ');
        if (!process.env.SECRET_KEY)
            throw new Error('Chave secreta não localizada');
        verify(token, process.env.SECRET_KEY);
        next();
    } catch (error) {
        next(error);
    }
};

export default validateToken;
