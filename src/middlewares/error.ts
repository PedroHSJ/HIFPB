import { NextFunction, Request, Response } from "express";
import { ApiError } from "../helpers/api-erros";

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500;
  const message =
    error.statusCode != 500 ? error.message : "Erro interno do servidor";
  return res.status(statusCode).json({
    message: message,
  });
};
