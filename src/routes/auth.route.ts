import { register } from "../Controllers/authController";
import { router } from "./route";

router.post('/register', register)
