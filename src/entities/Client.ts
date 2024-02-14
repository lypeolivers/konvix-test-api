import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { Sale } from "./Sale";

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  cod_cliente: number;

  @Column()
  des_nome: string;

  @Column({ default: false })
  flg_inativo: boolean;

  @Column()
  des_endereco: string;

  @Column()
  num_endereco: string;

  @Column()
  des_cidade: string;

  @Column()
  des_uf: string;

  @Column()
  des_telefone: string;

  @Column()
  des_contato: string;

  //Campos automatizados
  @Column({ default: "0" })
  val_venda_acumulado: string;

  @Column({ default: "0" })
  qtd_venda_pedidos: string;

  @Column({ nullable: true })
  dta_ult_pedido: Date;

  @CreateDateColumn()
  dta_cadastro: Date;

  @UpdateDateColumn()
  dta_alteracao: Date;

  //RELACIONAMENTOS
  @OneToMany(() => Sale, (sale) => sale.cod_cliente)
  sales: Sale[];
}
