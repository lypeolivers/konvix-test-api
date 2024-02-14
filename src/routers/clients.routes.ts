import { Router } from "express";

import {
  createClientsController,
  deleteClientsController,
  getClientsController,
  updateClientsController,
} from "../controllers/clients.controllers";

const clientsRouter = Router();

clientsRouter.get("", getClientsController);
clientsRouter.post("", createClientsController);
clientsRouter.patch("/:id", updateClientsController);
clientsRouter.delete("/:id", deleteClientsController);

export default clientsRouter;
