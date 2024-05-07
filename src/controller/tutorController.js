const { raw } = require("express");
const Tutor = require("../models/tutorModel");

class tutorController {
  constructor() {}

  // Lista todos tutors
  getTutors = async (req, res) => {
    try {
      // Usa o raw : true para mostrar só o necessário
      const tutors = await Tutor.findAll({ raw: true });
      console.log(tutors);
      // Envia a resposta HTTP em json, sem colocar fica com load infinito no postman
      res.json(tutors);
    } catch (err) {
      console.log(err);
    }
  };

  // Cria um tutor
  setTutors = async (req, res) => {
    try {
      // Pega o corpo da requisição
      const tutorData = req.body;
      const newTutor = await Tutor.create(tutorData);
      const consoleNewTutor = await Tutor.findOne({
        raw: true,
        where: { id: newTutor.id },
      });
      console.log(consoleNewTutor);
      res.json(newTutor);
    } catch (err) {
      console.error(err);
    }
  };

  // Atualiza um tutor existente
  updateTutors = async (req, res) => {
    try {
      // Pega o id que será passado na URL
      const id = req.params.id;
      const tutorData = req.body;
      // Atualiza o tutor baseado no id que foi passado pela URL
      const newTutor = await Tutor.update(tutorData, { where: { id: id } });
      const tutors = await Tutor.findOne({ raw: true, where: { id: id } });
      // Caso o tutor exista da o console log nele atualizado
      if (newTutor == 1) {
        console.log(tutors);
      } else {
        console.log("Tutor not found");
      }
      res.json(newTutor);
    } catch (err) {
      console.error(err);
    }
  };

  // Da soft delete em um tutor
  deleteTutor = async (req, res) => {
    try {
      const id = req.params.id;
      const delTutor = await Tutor.destroy({ where: { id: id } });
      console.log("Status code", res.statusCode);
      res.status(200).json(delTutor);
    } catch (err) {
      console.log(err, "User not found");
    }
  };
}

module.exports = tutorController;
