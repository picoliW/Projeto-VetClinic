const { Sequelize } = require("sequelize");
const db = require("../conn");

const Pet = db.define("Pet", {
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
  species: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  carry: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  weight: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  date_of_birth: {
    type: Sequelize.DATE,
    allowNull: false,
  },
});

module.exports = Pet;
