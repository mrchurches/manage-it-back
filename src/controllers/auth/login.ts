import { Response, Request } from "express";

import jwt from "jsonwebtoken";
const { Users } = require("../../db");

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  //TODO hacer hash

  try {
    //Primero busca al usuario por mail, para poder identificar cual es el error.
    let userDb = await Users.findOne({ where: { email: email } });
    if (userDb !== null && userDb.password === password) {
      const token: string = jwt.sign( //Por default si no se pasa type ni algoritrmo, usa JWT y SHA256
        { id: userDb.id },
        process.env.TOKEN_SECRET || "nosecret" // TODO verificar esto
      );
      console.log("linea 18", process.env.TOKEN_SECRET)
      res.status(200).header("auth_token", token).json({ auth_token: token, status: "success" });
    } else if (userDb !== null && userDb.password !== password) {
      res
        .status(500)
        .json({ status: "failure", msg: "password doesn't match" });
    } else {
      res.status(500).json({ status: "failure", msg: "no data matches" });
    }
  } catch (error) {
    console.log(error);
  }
};
