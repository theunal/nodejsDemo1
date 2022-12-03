import { Request, Response } from "express";
import jwtHelper from "../helpers/jwt.helper";

export const register = (req: Request, res: Response) => {

    let tokenBody = {
        role: 'personel',
        nameidentifier: 'id',
        name: 'yusuf unal',
        dateofbirth: 'branch ID',
        postalcode: 'branchGuid',
        groupsid: 'personelGuid',
        country: 'companyGuid',
        givenname: 'şirket adı',
        actor: 'admin id',
        anonymous: 'admin guid'
    }

    let token = jwtHelper(tokenBody)

    res.send({
        token: token
    })
}   

export const login = (req: Request, res: Response) =>  {
    return res.send()
}