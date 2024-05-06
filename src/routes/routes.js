const express = require("express");
const tutorController = require("../controller/tutorController");
const router = express.Router();

router.get("/tutors", tutorController);

module.exports = router;
