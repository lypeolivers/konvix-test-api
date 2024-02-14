import { Request, Response } from "express";
import {
  getSalesFilterService,
  getSalesItemsService,
  getSalesService,
} from "../services/sales/getSales.service";
import {
  createSalesFinalService,
  createSalesItemsService,
  createSalesService,
} from "../services/sales/createSales.service";

export const getReportController = async (req: Request, res: Response) => {
  const data = await getSalesFilterService(req.body);
  return res.status(201).json(data);
};
