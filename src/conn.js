const { Sequelize } = require("sequelize");
require("dotenv").config();

// Cria as variáveis do .env
const dbDialect = process.env.DB_DIALECT;
const dbStorage = process.env.DB_STORAGE;

// Cria a conexão com o banco de dados pelas informações do .env
const sequelize = new Sequelize({
  storage: dbStorage,
  dialect: dbDialect,
});

module.exports = sequelize;
