export default {
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "knx",
    charset: "utf8",
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
