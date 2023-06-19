import { DataSource, DataSourceOptions } from "typeorm";
import "dotenv/config";
import "reflect-metadata";
import { SeederOptions } from "typeorm-extension";
import { MainSeeder } from "./seeds/mainSeeder";

const port = process.env.DB_PORT as number | undefined;
const options: DataSourceOptions & SeederOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [`${__dirname}/**/entities/*{.ts,.js}`],
  migrations: [`${__dirname}/**/migrations/*{.ts,.js}`],
  seeds: [MainSeeder],
};

export const AppDataSource = new DataSource(options);
