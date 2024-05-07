const express = require("express");
const TutorController = require("../controller/tutorController");
const router = express.Router();

const tutorController = new TutorController();

router.get("/tutors", tutorController.getTutors);
router.post("/tutors", tutorController.setTutors);
router.put("/tutor/:id", tutorController.updateTutors);

module.exports = router;
