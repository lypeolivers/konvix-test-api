import AppDataSource from "../../data-source";
import { User } from "../../entities/User";
import { IUserRequest, IUserResponse } from "../../interfaces/Users";

export const createUserService = async (
  payload: IUserRequest
): Promise<User> => {
  const userRepo = AppDataSource.getRepository(User);
  let user = userRepo.create(payload);

  await userRepo.save(user);

  return user;
};
