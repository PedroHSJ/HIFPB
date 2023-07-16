import { NextFunction, Request, Response } from 'express';
import { estabelecimentoPostSchema } from '../../validations/estabelecimentoSchema';

const estabelecimentoValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const estabelecimento = req.body;
        await estabelecimentoPostSchema.validate(estabelecimento, {
            abortEarly: false,
        });
        next();
    } catch (error) {
        next(error);
    }
};

export default estabelecimentoValidation;
