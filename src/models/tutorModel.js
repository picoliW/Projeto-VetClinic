// Importa o DataTypes que é um módulo do sequelize que pega os tipos de dados
const { DataTypes } = require("sequelize");
const db = require("../conn");
const Pet = require("./petModel");

// Cria modelo da tabela tutors
Tutors = db.define(
  "Tutors",
  {
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
      type: DataTypes.STRING,
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
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Habilita o soft delete
    paranoid: true,
    // Coloca o nome como destroyTime para melhor entedimento
    deletedAt: "destroyTime",
    timestamps: true,
    // Desativa a conversão de fuso horário
    timezone: false,
  }
);

// Define que cada instância de Tutor pode ter vários Pets
Tutors.hasMany(Pet, { as: "pets" });

module.exports = Tutors;
