import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 9122,
  username: "benchmark-api-db-typeorm",
  password: "benchmark-api-db-typeorm",
  database: "benchmark-api-db-typeorm",
  synchronize: true,
  logging: false,
  entities: [],
  subscribers: [],
  migrations: [],
});

export default AppDataSource;