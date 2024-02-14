import { Request, Response } from "express";
import {
  getSalesItemsService,
  getSalesService,
} from "../services/sales/getSales.service";
import {
  createSalesFinalService,
  createSalesItemsService,
  createSalesService,
} from "../services/sales/createSales.service";

export const getSalesController = async (req: Request, res: Response) => {
  const data = await getSalesService();
  return res.status(201).json(data);
};

export const createSalesController = async (req: Request, res: Response) => {
  const data = await createSalesService(req.body);
  return res.status(201).json(data);
};

export const getSalesItemsController = async (req: Request, res: Response) => {
  const data = await getSalesItemsService();
  return res.status(201).json(data);
};

export const createSalesItemsController = async (
  req: Request,
  res: Response
) => {
  const data = await createSalesItemsService(req.body);
  return res.status(201).json(data);
};

export const createSalesFinalController = async (
  req: Request,
  res: Response
) => {
  const data = await createSalesFinalService(req.body);
  return res.status(201).json(data);
};
