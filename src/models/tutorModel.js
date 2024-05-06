const { DataTypes } = require("sequelize");
const db = require("../conn");

class TutorModel {
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

  async getTutors() {
    try {
      const tutors = await this.Tutors.findAll();
      return tutors;
    } catch (error) {
      console.error("Erro ao recuperar tutores:", error);
      throw error;
    }
  }
}

module.exports = TutorModel;
