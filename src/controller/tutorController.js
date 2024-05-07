const { raw } = require("express");
const Tutor = require("../models/tutorModel");
const Pet = require("../models/petModel");

class tutorController {
  constructor() {}

  // Lista todos tutors
  getTutors = async (req, res) => {
    try {
      // Usa o raw : true para mostrar só o necessário
      const tutors = await Tutor.findAll({ raw: true });
      const pets = await Pet.findAll({ raw: true });
      const tutoraWithPets = console.log(tutors, pets);
      // Envia a resposta HTTP em json, sem colocar fica com load infinito no postman
      res.json(tutors);
    } catch (err) {
      console.log(err);
    }
  };

  // Cria um tutor
  setTutor = async (req, res) => {
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
  updateTutor = async (req, res) => {
    try {
      // Pega o id que será passado na URL
      const id = req.params.id;
      const tutorData = req.body;
      // Atualiza o tutor baseado no id que foi passado pela URL
      const newTutor = await Tutor.update(tutorData, { where: { id: id } });
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
      console.log(err, "Tutor not found");
    }
  };

  // Cria um pet vinculado a um tutor
  setPet = async (req, res) => {
    try {
      const petData = req.body;
      const tutorId = req.params.tutorid;
      petData.TutorId = tutorId;
      const newPet = await Pet.create(petData);
      console.log(petData);
      res.json(newPet);
    } catch (err) {
      console.log(err);
    }
  };

  // Atualiza um pet de um tutor específico
  updatePet = async (req, res) => {
    const petData = req.body;
    const tutorId = req.params.tutorid;
    const petId = req.params.petid;

    try {
      const newPet = await Pet.update(petData, {
        where: { id: petId, TutorId: tutorId },
      });
      const pets = await Pet.findOne({ raw: true, where: { id: petId } });
      if (newPet == 1) {
        console.log(pets);
      } else {
        console.log("Not found");
      }
      res.send(newPet);
    } catch (err) {
      console.log(err);
    }
  };

  deletePet = async (req, res) => {
    const petData = req.body;
    const tutorId = req.params.tutorid;
    const petId = req.params.petid;
    const delPet = await Pet.destroy({
      where: { id: petId, TutorId: tutorId },
    });

    console.log("Status code", res.statusCode);
    res.status(200).json(delPet);
  };
}

module.exports = tutorController;
