import AppDataSource from "../../data-source";
import { Client } from "../../entities/Client";
import { IClientResponse, IClientUpdate } from "../../interfaces/Clients";

export const updateClientsService = async (
  clientData: IClientUpdate,
  clientId: number
): Promise<Client> => {
  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({ cod_cliente: clientId });

  if (!client) {
    return;
  }

  const updateClient = clientRepo.create({
    ...client,
    ...clientData,
  });

  await clientRepo.save(updateClient);

  return updateClient;
};
