import { NextFunction, Request, Response } from 'express';
import * as Yup from 'yup';

export function errorMiddleware(
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) {
    const statusCode = error.statusCode ?? 500;
    const message = error.message ?? 'Internal Server Error';

    if (error instanceof Yup.ValidationError) {
        const errors: any = {};
        error.inner.forEach((err: any) => {
            errors[err.path] = err.errors;
        });
        return res.status(400).json({ message: 'Erro de validação.', errors });
    }

    res.status(statusCode).json({ message });
}
