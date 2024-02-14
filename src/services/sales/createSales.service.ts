import AppDataSource from "../../data-source";
import { Client } from "../../entities/Client";
import { Sale } from "../../entities/Sale";
import { SaleItem } from "../../entities/SaleItem";
import { ISaleRequest, ISalesItemRequest } from "../../interfaces/Sales";

export const createSalesService = async (
  payload: ISaleRequest
): Promise<Sale> => {
  const saleRepo = AppDataSource.getRepository(Sale);
  const clientRepo = AppDataSource.getRepository(Client);

  const client = await clientRepo.findOneBy({
    cod_cliente: payload.cod_cliente,
  });
  let sale = saleRepo.create({ ...payload, cod_cliente: client });

  await saleRepo.save(sale);

  return sale;
};

export const createSalesItemsService = async (
  payload: ISalesItemRequest
): Promise<SaleItem> => {
  const salesItemsRepo = AppDataSource.getRepository(SaleItem);
  const saleRepo = AppDataSource.getRepository(Sale);
  const sale = await saleRepo.findOneBy({
    cod_venda: payload.cod_venda,
  });

  const total = parseInt(payload.qtd_itens) * parseInt(payload.val_unitario);
  let saleItem = salesItemsRepo.create({
    ...payload,
    val_total: String(total),
    cod_venda: sale,
  });
  await salesItemsRepo.save(saleItem);
  return saleItem;
};

export const createSalesFinalService = async (payload: any): Promise<Sale> => {
  const saleRepo = AppDataSource.getRepository(Sale);
  const clientRepo = AppDataSource.getRepository(Client);
  const salesItemsRepo = AppDataSource.getRepository(SaleItem);

  const client = await clientRepo.findOneBy({
    cod_cliente: payload.sale.cod_cliente,
  });

  let sale = saleRepo.create({
    cod_cliente: client,
    dta_venda: payload.sale.dta_venda,
  });
  await saleRepo.save(sale);
  let totalSale = 0;

  await Promise.all(
    payload.salesItems.map(async (saleItem) => {
      const total =
        parseInt(saleItem.qtd_itens) * parseInt(saleItem.val_unitario);
      saleItem.val_total = total;
      saleItem.cod_venda = sale;
      let saleItemCreate = salesItemsRepo.create(saleItem);
      await salesItemsRepo.save(saleItemCreate);
      totalSale += total;
      return totalSale;
    })
  );

  let newClient = clientRepo.create({
    ...client,
    val_venda_acumulado: String(
      parseInt(client.val_venda_acumulado) + totalSale
    ),
    qtd_venda_pedidos: String(parseInt(client.qtd_venda_pedidos) + 1),
    dta_ult_pedido: payload.sale.dta_venda,
  });
  let saleTotal = saleRepo.create({
    ...sale,
    val_total_venda: String(totalSale),
  });
  await clientRepo.save(newClient);
  await saleRepo.save(saleTotal);
  return saleTotal;
};
