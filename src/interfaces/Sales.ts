import { Client } from "../entities/Client";

export interface ISaleRequest {
  cod_cliente: number;
  dta_venda: string;
  val_total_venda: string;
}

export interface ISalesItemRequest {
  cod_venda: number;
  des_produto: string;
  val_unitario: string;
  qtd_itens: string;
}

export interface ISaleUpdate {
  dta_venda: string;
  val_total_venda: string;
}

export interface ISale {
  cod_venda: number;
  cod_cliente: number;
  dta_venda: string;
  val_total_venda: string;
}

export interface ISaleResponse {
  cod_venda: number;
  cod_cliente: number;
  dta_venda: string;
  val_total_venda: string;
}
