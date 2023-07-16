import { NextFunction, Request, Response } from 'express';
import { salaDeAulaPostSchema } from '../../validations/salaDeAulaSchema';

const salaDeAulaValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const salaDeAula = req.body;
        await salaDeAulaPostSchema.validate(salaDeAula, { abortEarly: false });
        next();
    } catch (error) {
        next(error);
    }
};

export default salaDeAulaValidation;
