import { DataSource } from "typeorm";
import Address from "./UserAdressRepository/Address";
import User from "./UserRepository/User";


const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 9122,
  username: "benchmark-api-db-typeorm",
  password: "benchmark-api-db-typeorm",
  database: "benchmark-api-db-typeorm",
  synchronize: true,
  logging: false,
  entities: ["./UserRepository/User.ts", "./UserAdressRepository/Address.ts"],
  migrations: ["../../../migrations/*.ts"]
});

AppDataSource.initialize().then(() => {
  console.log("Data Source has been initialized!");
}).catch(e => {
  console.error("Error during Data Source initialization", e);
});

export default AppDataSource;