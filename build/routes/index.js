"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = (0, express_1.default)();
// import {register} from "../controllers/auth/register"
// import { login } from "../controllers/auth/login"
const profile_1 = require("../controllers/auth/profile");
router.get("/profile", profile_1.profile);
// router.post("/register", register)
// router.post("/login", login)
module.exports = router;
