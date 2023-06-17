import express, { NextFunction, Request, Response } from "express";
import { alunoRoutes, authRoutes, usuarioRoutes } from "../routes";
import { errorMiddleware } from "../middlewares/error";
import validateToken from "../middlewares/authMiddleware";

const app = express();

app.use(express.json());

app.use("/usuario", validateToken, usuarioRoutes);
app.use("/auth", authRoutes);

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
