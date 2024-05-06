const express = require("express");
const TutorController = require("../controller/tutorController");
const router = express.Router();

const tutorController = new TutorController();

router.get("/tutors", tutorController.getTutors);

module.exports = router;
