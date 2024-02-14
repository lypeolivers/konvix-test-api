import { Request, Response } from "express";
import { getClientsService } from "../services/clients/getClients.service";
import { createClientsService } from "../services/clients/createClients.service";
import { IClientUpdate } from "../interfaces/Clients";
import { updateClientsService } from "../services/clients/updateClients.service";
import { deleteClientsService } from "../services/clients/deleteClients.service";

export const getClientsController = async (req: Request, res: Response) => {
  const data = await getClientsService();
  return res.status(201).json(data);
};

export const createClientsController = async (req: Request, res: Response) => {
  const data = await createClientsService(req.body);
  return res.status(201).json(data);
};

export const updateClientsController = async (req: Request, res: Response) => {
  const clientData: IClientUpdate = req.body;
  const clientId = parseInt(req.params.id);
  const updatedClient = await updateClientsService(clientData, clientId);
  return res.status(201).json(updatedClient);
};

export const deleteClientsController = async (req: Request, res: Response) => {
  const clientId = parseInt(req.params.id);
  const data = await deleteClientsService(clientId);
  return res.status(201).json(data);
};
