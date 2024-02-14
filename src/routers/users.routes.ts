import { Router } from "express";
import {
  createUsersController,
  getUsersController,
} from "../controllers/users.controllers";

const usersRouter = Router();

usersRouter.get("", getUsersController);
usersRouter.post("", createUsersController);

export default usersRouter;
