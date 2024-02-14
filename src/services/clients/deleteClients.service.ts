import AppDataSource from "../../data-source";
import { Client } from "../../entities/Client";

export const deleteClientsService = async (id: number): Promise<void> => {
  const clientRepo = AppDataSource.getRepository(Client);
  const client = await clientRepo.findOneBy({ cod_cliente: id });
  if (!client) {
    return;
  }

  client.flg_inativo = true;
  await clientRepo.save(client);
};
