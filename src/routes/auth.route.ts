import { login, register } from "../Controllers/authController";
import express from 'express';
import authMiddleware from "../middlewares/auth.middleware";

const authRouter = express.Router()

authRouter.post('/register', register)

authRouter.post('/login', authMiddleware, login)

export default authRouter