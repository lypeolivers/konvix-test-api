export interface IClientRequest {
  des_nome: string;
  des_endereco: string;
  num_endereco: string;
  des_cidade: string;
  des_uf: string;
  des_telefone: string;
  des_contato: string;
}

export interface IClientUpdate {
  des_nome: string;
  des_endereco: string;
  num_endereco: string;
  des_cidade: string;
  des_uf: string;
  des_telefone: string;
  des_contato: string;
}

export interface IClient {
  cod_usuario: number;
  flg_inativo: boolean;
  des_nome: string;
  des_endereco: string;
  num_endereco: string;
  des_cidade: string;
  des_uf: string;
  des_telefone: string;
  des_contato: string;
  val_venda_acumulado: string;
  qtd_venda_pedidos: string;
  dta_ult_pedido: string;
  dta_cadastro: string;
  dta_alteracao: string;
}

export interface IClientResponse {
  cod_usuario: number;
  flg_inativo: boolean;
  des_nome: string;
  des_endereco: string;
  num_endereco: string;
  des_cidade: string;
  des_uf: string;
  des_telefone: string;
  des_contato: string;
  val_venda_acumulado: string;
  qtd_venda_pedidos: string;
  dta_ult_pedido: string;
  dta_cadastro: string;
  dta_alteracao: string;
}
