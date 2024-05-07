const Tutor = require("../models/tutorModel");

class tutorController {
  constructor() {}

  getTutors = async (req, res) => {
    try {
      const tutors = await Tutor.findAll();
      res.json(tutors);
    } catch (err) {
      console.log(err);
    }
  };

  setTutors = async (req, res) => {
    try {
      const tutorData = req.body;
      const newTutor = await Tutor.create(tutorData);
      res.json(newTutor);
    } catch (err) {
      console.error(err);
    }
  };

  updateTutors = async (req, res) => {
    try {
      const id = req.params.id;
      const tutorData = req.body;
      const newTutor = await Tutor.update(tutorData, { where: { id: id } });
      res.json(newTutor);
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = tutorController;
