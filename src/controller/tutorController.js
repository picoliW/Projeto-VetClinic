const Tutor = require("../models/tutorModel");
const Pet = require("../models/petModel");
const TutorServices = require("../services/tutorServices");

class tutorController {
  constructor() {}

  tutorServices = new TutorServices();
  getTutors = async (req, res) => {
    try {
      const tutors = await Tutor.findAll({ raw: true });
      const pets = await Pet.findAll({ raw: true });

      if (tutors.length === 0) {
        console.log("no tutor registered yet");
        return res.json();
      }

      // Cria um objeto vazio para armazenar os pets organizados por TutorId
      const petsByTutorId = {};

      pets.forEach((pet) => {
        // Se não houver um array de pets para o TutorId atual
        if (!petsByTutorId[pet.TutorId]) {
          // Cria um novo array vazio para esse TutorId
          petsByTutorId[pet.TutorId] = [];
        }
        // Adiciona o pet ao array correspondente ao TutorId
        petsByTutorId[pet.TutorId].push(pet);
      });

      // Adiciona os pets correspondentes a cada tutor no array de tutores
      tutors.forEach((tutor) => {
        // Verifica se há pets vinculados ao tutor
        if (petsByTutorId[tutor.id]) {
          // Atribui o array de pets ao tutor
          tutor.pets = petsByTutorId[tutor.id];
        } else {
          tutor.pets = "No pets linked";
        }
      });

      // .dir e depth null para mostrar o objeto inteiro
      console.dir(tutors, { depth: null });

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
      const requiredFields = [
        "name",
        "phone",
        "email",
        "date_of_birth",
        "zip_code",
      ];

      // Verifica se todos os campos necessários estão presentes
      if (!this.tutorServices.validateFields(tutorData, requiredFields)) {
        return res.status(400).json();
      }

      // Validação do phone
      if (!this.tutorServices.isValidPhone(tutorData.phone)) {
        console.log("Invalid phone, example format: 11999999999");
        return res.json();
      }

      // Validação do e-mail
      if (!this.tutorServices.isValidEmail(tutorData.email)) {
        console.log("Invalid E-mail, example format: email@email.com");
        return res.json();
      }

      // Validação do zip code
      if (!this.tutorServices.isValidZipCode(tutorData.zip_code)) {
        console.log("Invalid zip-code, example format: 00000-000");
        return res.json();
      }

      if (
        !(await this.tutorServices.isEmailOrPhoneUnique(
          tutorData.email,
          tutorData.phone
        ))
      ) {
        console.log("Email or phone already exists");
        return res.json();
      }

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
      const requiredFields = [
        "name",
        "phone",
        "email",
        "date_of_birth",
        "zip_code",
      ];

      if (!this.tutorServices.validateFields(tutorData, requiredFields)) {
        return res.status(400).json();
      }

      // Validação do phone
      if (!this.tutorServices.isValidPhone(tutorData.phone)) {
        console.log("Invalid phone, example format: 11999999999");
        return res.json();
      }

      // Validação do e-mail
      if (!this.tutorServices.isValidEmail(tutorData.email)) {
        console.log("Invalid E-mail, example format: email@email.com");
        return res.json();
      }

      // Validação do zip code
      if (!this.tutorServices.isValidZipCode(tutorData.zip_code)) {
        console.log("Invalid zip-code, example format: 00000-000");
        return res.json();
      }
      // Atualiza o tutor baseado no id que foi passado pela URL
      const newTutor = await Tutor.update(tutorData, { where: { id: id } });
      const tutors = await Tutor.findOne({ raw: true, where: { id: id } });
      // Caso o tutor exista da o console log nele atualizado
      if (newTutor == 1) {
        console.log("Tutor updated");
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
      if (delTutor == 0) {
        console.log("Tutor not found");
        return res.json();
      }
      console.log("Status code", res.statusCode);
      res.status(200).json(delTutor);
    } catch (err) {
      console.log(err, "Tutor not found");
    }
  };

  // Cria um pet vinculado a um tutor
  setPet = async (req, res) => {
    const tutorId = req.params.tutorid;
    try {
      const tutor = await Tutor.findByPk(tutorId);

      if (!tutor) {
        console.log("Tutor not found");
        // Termina a requsição se não houver um tutor
        return res.json();
      }
      const petData = req.body;

      const requiredFields = [
        "name",
        "species",
        "carry",
        "weight",
        "date_of_birth",
      ];

      if (!this.tutorServices.validateFields(petData, requiredFields)) {
        return res.status(400).json();
      }

      if (this.tutorServices.isWeightNumber(petData.weight)) {
        return res.status(400).json();
      }

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
    const tutor = await Tutor.findByPk(tutorId);
    try {
      const requiredFields = [
        "name",
        "species",
        "carry",
        "weight",
        "date_of_birth",
      ];

      if (!this.tutorServices.validateFields(petData, requiredFields)) {
        return res.status(400).json();
      }

      if (this.tutorServices.isWeightNumber(petData.weight)) {
        return res.status(400).json();
      }

      const newPet = await Pet.update(petData, {
        where: { id: petId, TutorId: tutorId },
      });
      // O update(), retorna um array onde o primeiro elemento[0] é o número de linhas que foram atualizadas no banco de dados
      // Nesse caso aqui se o valor de linhas atualizadas for 0 significa que o pet não foi encontrado
      if (!tutor || newPet[0] === 0) {
        console.log("Not found");
        return res.json();
      } else {
        console.log("Pet updated");
      }
      res.send(newPet);
    } catch (err) {
      console.log(err);
    }
  };

  deletePet = async (req, res) => {
    const tutorId = req.params.tutorid;
    const petId = req.params.petid;
    const delPet = await Pet.destroy({
      where: { id: petId, TutorId: tutorId },
    });
    if (delPet == 0) {
      console.log("Not found");
      res.json();
    } else {
      console.log("Status code", res.statusCode);
      res.status(200).json(delPet);
    }
  };

  getSwagger = async (req, res) => {
    res.sendFile("swagger-docs/index.html", { root: "./" });
  };
}

module.exports = tutorController;
