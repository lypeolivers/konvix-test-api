import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from "typeorm";
import { Sale } from "./Sale";

@Entity()
export class SaleItem {
  @PrimaryGeneratedColumn()
  cod_item: number;

  @Column()
  des_produto: string;

  @Column()
  val_unitario: string;

  @Column()
  qtd_itens: string;

  @Column({ default: "0" })
  val_total: string;

  @CreateDateColumn()
  dta_cadastro: Date;

  //RELACIONAMENTOS
  @ManyToOne(() => Sale, (sale) => sale.salesItems)
  cod_venda: Sale;
}
