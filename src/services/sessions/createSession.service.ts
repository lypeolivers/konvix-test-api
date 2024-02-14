import { compare } from "bcryptjs";
import { Response } from "express";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { User } from "../../entities/User";
import { IUserLogin } from "../../interfaces/Users";

const createSessionService = async (
  { des_email, des_senha }: IUserLogin,
  res: Response
) => {
  const userRepo = AppDataSource.getRepository(User);
  const user = await userRepo.findOneBy({ des_email: des_email });

  if (!user) {
    return res.status(403).json({ message: "Wrong email/password" });
  }
  const passwordMatch = await compare(des_senha, user.des_senha);

  if (!passwordMatch) {
    return res.status(403).json({ message: "Wrong email/password" });
  }

  if (user.flg_inativo) {
    return res.status(400).json({ message: "Usuário inativo" });
  }

  const token = jwt.sign(
    {
      flg_inativo: user.flg_inativo,
    },
    process.env.SECRET_KEY,
    {
      subject: String(user.cod_usuario),
      expiresIn: "24h",
    }
  );

  return res.json({ token });
};

export default createSessionService;
