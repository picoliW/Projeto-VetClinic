const express = require("express");
const TutorController = require("../controller/tutorController");
// Utiliza a classe router do express para criar as rotas
const router = express.Router();

// Instancia o controlador
const tutorController = new TutorController();

// Define as rotas
router.get("/tutors", tutorController.getTutors);
router.post("/tutor", tutorController.setTutor);
router.put("/tutor/:id", tutorController.updateTutor);
router.delete("/tutor/:id", tutorController.deleteTutor);
router.post("/pet/:tutorid", tutorController.setPet);
router.put("/pet/:petid/tutor/:tutorid", tutorController.updatePet);
router.delete("/pet/:petid/tutor/:tutorid", tutorController.deletePet);

module.exports = router;
