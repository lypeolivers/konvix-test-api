import { Request, Response } from "express";
import AppDataSource from "../../data-source";
import { getRepository } from "typeorm";
import { User } from "../../entities/User";

export const getUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  return users;
};

// export const getUserById = async (req: Request, res: Response) => {
//   const userRepository = getRepository(User);
//   const userId = parseInt(req.params.id, 10);

//   try {
//     const user = await userRepository.findOneOrFail(userId);
//     res.json(user);
//   } catch (error) {
//     res.status(404).json({ error: "User not found" });
//   }
// };
