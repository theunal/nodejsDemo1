import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";


const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    var authorization = req.header('Authorization')
    if (authorization == undefined || authorization == '' || !authorization.includes('Bearer'))
        return res.status(401).send()

    let token = authorization.split(' ')[1]
    let secretKey = process.env.secretKey

    try {
        if (secretKey != undefined) {
            let verify = jwt.verify(token, secretKey)
            if (verify)
                return next()
            else
                res.status(401).send()
        }
        res.status(401).send()
    }
    catch (err) {
        res.status(401).send()
    }
}

export default authMiddleware