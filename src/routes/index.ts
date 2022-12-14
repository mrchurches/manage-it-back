import Router from "express"
const router = Router();
// import {register} from "../controllers/auth/register"
// import { login } from "../controllers/auth/login"
import { profile } from "../controllers/auth/profile";

router.get("/profile", profile)

// router.post("/register", register)
// router.post("/login", login)











module.exports = router;