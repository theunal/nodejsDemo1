import { createUser, deleteUser, getUser, getUsers, updateUser } from "../Controllers/user.controller";
import express from 'express';

const userRouter = express.Router()

userRouter.post('/createUser', createUser)

userRouter.get('/users', getUsers)

userRouter.get('/users/:id', getUser)

userRouter.put('/updateUser/:id', updateUser)

userRouter.delete('/deleteUser/:id', deleteUser)

export default userRouter