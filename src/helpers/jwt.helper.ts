import jwt from 'jsonwebtoken';

const jwtHelper = (body: any) => {
    return jwt.sign(body, `${process.env.secretKey?.toString()}`,
        {
            algorithm: 'HS256',
            audience: process.env.audience,
            issuer: process.env.issuer,
            expiresIn: process.env.expiresIn
        })
}

export default jwtHelper