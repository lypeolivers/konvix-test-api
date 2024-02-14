import { Request, Response } from "express";
import { getUsersService } from "../services/users/getUsers.service";
import { createUserService } from "../services/users/createUsers.service";

export const getUsersController = async (req: Request, res: Response) => {
  const data = await getUsersService();
  return res.status(201).json(data);
};

export const createUsersController = async (req: Request, res: Response) => {
  const data = await createUserService(req.body);
  return res.status(201).json(data);
};
