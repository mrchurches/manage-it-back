import { Request, Response } from "express";

export const profile = (req: Request, res: Response)=>{
res.send("The data about the profile")
}