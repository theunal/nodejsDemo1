import { createUser, deleteUser, getUser, getUsers, updateUser } from "../Controllers/user.controller";
import { router } from "./route";

router.post('/createUser', createUser)

router.get('/users', getUsers)

router.get('/users/:id', getUser)

router.put('/updateUser/:id', updateUser)

router.delete('/deleteUser/:id', deleteUser)
