import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import env from 'dotenv';
import userRouter from './routes/user.route';
import authRouter from './routes/auth.route';

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(authRouter)
env.config()

export default app