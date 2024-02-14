import { hashSync } from "bcryptjs";
import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  cod_usuario: number;

  @Column()
  des_email: string;

  @Column()
  des_senha: string;

  @Column({ default: false })
  flg_inativo: boolean;

  @BeforeInsert()
  hashPassword() {
    this.des_senha = hashSync(this.des_senha, 10);
  }
}
