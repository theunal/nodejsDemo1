import { Request, Response } from "express";
import { User } from "../Entities/User";

export const createUser = async (req: Request, res: Response) => {
    try {
        let user = new User()
        user.FirstName = req.body.firstName
        user.LastName = req.body.lastName
        user.IsActive = true

        await user.save()

        console.log(user)

        res.send('user created')
    }
    catch (err) {
        if (err instanceof Error)
            return res.status(500).json({
                message: err.message
            })
    }
}

export const getUsers = async (req: Request, res: Response) => {
    let users = await User.find()
    res.send(users)
}

export const getUser = async (req: Request, res: Response) => {
    let user = await User.findOneBy({
        Id: parseInt(req.params.id)
    })

    if (user == null)
        return res.status(404).send({
            success: false,
            message: 'Kayıt bulunamadı.'
        })

    return res.status(200).send({
        success: true,
        message: 'Kullanıcı getirildi.',
        data: user
    })
}

export const updateUser = async (req: Request, res: Response) => {

    let user = await User.findOneBy({
        Id: parseInt(req.params.id)
    })

    if (user == null)
        return res.status(404).send({
            success: false,
            message: 'Kullanıcı Bulunamadı.'
        })

    // user.FirstName = req.body.FirstName
    // user.LastName = req.body.LastName         // birinci yöntem
    // user.IsActive = req.body.IsActive
    // await user.save()

    await User.update({ Id: parseInt(req.params.id) }, req.body)    // kinci yöntem



    return res.send({
        succes: true,
        message: 'Güncelleme Başarılı'
    })
}

export const deleteUser = async (req: Request, res: Response) => {

    let user = await User.findOneBy({
        Id: parseInt(req.params.id)
    })

    if (user == null)
        return res.status(404).send({
            success: false,
            message: 'Kullanıcı Bulunamadı.'
        })

    let deletedUser = await User.delete({
        Id: parseInt(req.params.id)
    })
    console.log(deleteUser)

    return res.status(404).send({
        success: true,
        message: 'Kayıt Silindi.'
    })
}