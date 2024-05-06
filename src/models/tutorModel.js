const { Sequelize } = require("sequelize");
const db = require("./conn");

const Tutors = database.define("tutors", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: Sequelize.TIMESTAMP,
    allowNull: false,
  },
  zip_code: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});
