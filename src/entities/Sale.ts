import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
} from "typeorm";
import { Client } from "./Client";
import { SaleItem } from "./SaleItem";

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  cod_venda: number;

  @CreateDateColumn()
  dta_venda: Date;

  @Column({ default: "0" })
  val_total_venda: string;

  //RELACIONAMENTOS
  @ManyToOne(() => Client, (client) => client.sales)
  cod_cliente: Client;

  @OneToMany(() => SaleItem, (saleItem) => saleItem.cod_venda)
  salesItems: SaleItem[];
}
