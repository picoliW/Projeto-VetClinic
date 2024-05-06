const { Sequelize } = require("sequelize");
require("dotenv").config();

const dbDialect = process.env.DB_DIALECT;
const dbStorage = process.env.DB_STORAGE;

const sequelize = new Sequelize({
  storage: dbStorage,
  dialect: dbDialect,
});

module.exports = sequelize;
