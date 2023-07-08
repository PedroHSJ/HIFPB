import { NextFunction, Request, Response } from "express";
import { interpretePostSchema } from "../../validations/interpreteSchema";
import * as yup from "yup";

const interpreteValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const interprete = req.body;
    await interpretePostSchema.validate(interprete, { abortEarly: false });
    next();
  } catch (error) {
    next(error);
  }
};

export default interpreteValidation;
