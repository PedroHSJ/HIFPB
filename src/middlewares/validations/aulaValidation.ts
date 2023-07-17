import { NextFunction, Request, Response } from 'express';
import { aulaSchema } from '../../validations/aulaSchema';
import { Console } from 'console';

const aulaValidation = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        await aulaSchema.validate(req.body, { abortEarly: false });
        next();
    } catch (error) {
        next(error);
    }
};

export default aulaValidation;
