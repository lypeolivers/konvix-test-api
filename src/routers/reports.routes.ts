import { Router } from "express";
import {
  createSalesController,
  createSalesFinalController,
  createSalesItemsController,
  getSalesController,
} from "../controllers/sales.controllers";
import { getReportController } from "../controllers/reports.controllers";

const reportsRouter = Router();

reportsRouter.post("", getReportController);

export default reportsRouter;
