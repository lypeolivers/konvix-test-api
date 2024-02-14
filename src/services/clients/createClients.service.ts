import AppDataSource from "../../data-source";
import { Client } from "../../entities/Client";
import { User } from "../../entities/User";
import { IClientRequest } from "../../interfaces/Clients";
import { IUserRequest, IUserResponse } from "../../interfaces/Users";

export const createClientsService = async (
  payload: IClientRequest
): Promise<Client> => {
  const clientRepo = AppDataSource.getRepository(Client);
  let client = clientRepo.create(payload);

  await clientRepo.save(client);

  return client;
};
