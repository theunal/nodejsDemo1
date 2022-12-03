import { Request, Response } from "express";
import jwt from 'jsonwebtoken'

export const login = (req: Request, res: Response) => {
    return res.send({
        env: process.env.secretKey
    })
}

export const register = (req: Request, res: Response) => {
    let token = jwt.sign({ id: 31 }, 'yusuf')
    res.send(token)
}   