import { create } from "domain";
import { Request, Response } from "express";
const { Users } = require("../../db");
import jwt from "jsonwebtoken";

//TODO generar token tambien en el registro
// De esta forma una vez registrado ya puede utilizar la pagina como estando recien logueado

export const register = async (req: Request, res: Response) => {
  let {
    name,
    lastname,
    email,
    password,
    location,
    phoneNumber,
    profilePicture,
    github,
    linkedin,
  } = req.body;

  try {
    if (
      !name ||
      !lastname ||
      !email ||
      !password ||
      !location ||
      !phoneNumber
    ) {
      res.status(500).send("Data missing");
    } else {
      let createdUser: any,
        emailDb = await Users.findOne({ where: { email } });
      // console.log(emailDb)
      if (emailDb !== null && emailDb.email === email)
        res.status(500).send({status:"failure", msg:"Email already registered"});
      else {
        createdUser = await Users.create({
          name,
          lastname,
          email,
          password,
          location,
          phoneNumber,
          profilePicture,
          github,
          linkedin,
        });

        const token: string = jwt.sign(
          { id: createdUser.id },
          process.env.TOKEN_SECRET || "nosecret"
        );

        res.header("auth_token", token).send({status:"success",data:createdUser});
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
};

// router.post("/", async (req: any, res: any, next: any) => {
//   console.log("linea 7: req.body",req.body);
//   let {
//     name,
//     lastname,
//     email,
//     password,
//     location,
//     phoneNumber,
//     profilePicture,
//     github,
//     linkedin,
//   } = req.body;

//   try {
//     if (
//       !name ||
//       !lastname ||
//       !email ||
//       !password ||
//       !location ||
//       !phoneNumber
//     ) {
//       res.status(500).send("Data missing");
//     } else {
//       let emailDb = await Users.findOne({ where: { email } });
//       // console.log(emailDb)
//       emailDb!==null&&(emailDb.email === email)
//         ? res.status(500).send("Email already registered")
//         : await Users.create({
//             name,
//             lastname,
//             email,
//             password,
//             location,
//             phoneNumber,
//             profilePicture,
//             github,
//             linkedin,
//           }).then(res.send("Created ok"));
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ error: error });
//   }
// });

// module.exports = router;
