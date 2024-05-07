const Tutor = require("../models/tutorModel");

class tutorController {
  constructor() {}

  // Lista todos tutors
  getTutors = async (req, res) => {
    try {
      // Usa o raw : true para mostrar só o necessário
      const tutors = await Tutor.findAll({ raw: true });
      console.log(tutors);
      // Envia a resposta HTTP em json
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
      res.json(newTutor);
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = tutorController;
