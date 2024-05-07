const { DataTypes } = require("sequelize");
const db = require("../conn");

Tutors = db.define("Tutors", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date_of_birth: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  zip_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Tutors;
