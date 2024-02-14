import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import {
  clientsRouter,
  reportsRouter,
  salesRouter,
  sessionRouter,
  usersRouter,
} from "./routers";
import { handleError } from "./errors";

const app: Application = express();
app.use(express.json());
app.use(cors());
app.use("/users", usersRouter);
app.use("/clients", clientsRouter);
app.use("/sales", salesRouter);
app.use("/report", reportsRouter);
app.use("/login", sessionRouter);

app.use(handleError);

export default app;
