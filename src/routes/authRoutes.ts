import { Router } from "express";
import { auth } from "../controllers/security/authController";

const authRoutes = Router();

authRoutes.post("/", auth);

export default authRoutes;
