import { Router } from "express";
import {
  createSalesController,
  createSalesFinalController,
  createSalesItemsController,
  getSalesController,
} from "../controllers/sales.controllers";

const salesRouter = Router();

salesRouter.get("", getSalesController);
salesRouter.post("", createSalesController);
salesRouter.post("/:id/item", createSalesItemsController);
salesRouter.post("/final", createSalesFinalController);

export default salesRouter;
