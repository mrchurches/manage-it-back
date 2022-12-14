import { Request, Response } from "express";
const { Users } = require("../../db");

export const profile = (req: Request, res: Response)=>{
res.send("The data about the profile")
}