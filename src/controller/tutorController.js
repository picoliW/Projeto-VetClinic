const TutorServices = require("../services/tutorServices");

class tutorController {
  tutorServices = new TutorServices();

  constructor() {}

  getTutors = async (req, res) => {
    const tutors = await this.tutorServices.getTutors();
    res.json(tutors);
  };
}

module.exports = tutorController;
