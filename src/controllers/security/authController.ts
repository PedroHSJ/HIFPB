import { NextFunction, Request, Response } from "express";
import { authService } from "../../services/authService";

const auth = async (req: Request, res: Response, next: NextFunction) => {
  const { username, password } = req.body;
  const token = await authService({ username, password });
  res.status(200).send({ token: token });
};

export { auth };
