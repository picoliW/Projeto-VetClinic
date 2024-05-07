const express = require("express");
const TutorController = require("../controller/tutorController");
// Utiliza a classe router do express para criar as rotas
const router = express.Router();

// Instancia tutorController
const tutorController = new TutorController();

// Define as rotas
router.get("/tutors", tutorController.getTutors);
router.post("/tutor", tutorController.setTutors);
router.put("/tutor/:id", tutorController.updateTutors);
router.delete("/tutor/:id", tutorController.deleteTutor);

module.exports = router;
