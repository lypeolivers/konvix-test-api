import { Request, Response } from "express";
import AppDataSource from "../../data-source";
import { Sale } from "../../entities/Sale";
import { SaleItem } from "../../entities/SaleItem";
import { Between } from "typeorm";

export const getSalesService = async () => {
  const saleRepository = AppDataSource.getRepository(Sale);
  const sales = await saleRepository.find({
    relations: {
      cod_cliente: true,
      salesItems: true,
    },
  });
  return sales;
};

export const getSalesItemsService = async () => {
  const saleItemRepository = AppDataSource.getRepository(SaleItem);
  const salesItems = await saleItemRepository.find({
    relations: {
      cod_venda: true,
    },
  });
  return salesItems;
};

export const getSalesFilterService = async (payload: any) => {
  const saleRepository = AppDataSource.getRepository(Sale);
  const sales = await saleRepository.find({
    where: {
      dta_venda: Between(
        new Date(payload.startDate),
        new Date(payload.endDate)
      ),
    },
    relations: {
      cod_cliente: true,
      salesItems: true,
    },
  });

  return sales;
};
