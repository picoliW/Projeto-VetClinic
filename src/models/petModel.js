const { Sequelize } = require("sequelize");
const db = require("../conn");

Pet = db.define(
  "Pet",
  {
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
  },
  {
    //Habilita o soft delete
    paranoid: true,
    deletedAt: "destroyTime",
    timestamps: true,
  }
);

module.exports = Pet;
