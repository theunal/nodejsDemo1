import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import env from 'dotenv';
import { router } from './routes/route';

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(router)
env.config()

export default app