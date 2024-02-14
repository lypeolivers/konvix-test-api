import { DataSource } from "typeorm";
import path from "path";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "sqlite",
  database: "db-teste.db",
  synchronize: true,
  entities: ["src/entities/*.ts"],
});

export default AppDataSource;
