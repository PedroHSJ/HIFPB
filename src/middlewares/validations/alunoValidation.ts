import { NextFunction, Request, Response } from 'express';
import { alunoPostSchema } from '../../validations/alunoSchema';

const alunoValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const aluno = req.body;
        await alunoPostSchema.validate(aluno, {
            abortEarly: false,
        });
        next();
    } catch (error) {
        next(error);
    }
};

export default alunoValidation;
