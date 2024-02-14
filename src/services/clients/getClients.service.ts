import { Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Client } from "../../entities/Client";

export const getClientsService = async () => {
  const clientRepository = AppDataSource.getRepository(Client);
  const clients = await clientRepository.find({
    where: {
      flg_inativo: false,
    },
  });
  return clients;
};
