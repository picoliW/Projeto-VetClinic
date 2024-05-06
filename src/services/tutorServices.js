const TutorModel = require("../models/tutorModel");

class tutorServices {
  tutorModel = new TutorModel();

  constructor() {}

  getTutors = async () => {
    const tutors = await this.tutorModel.getTutors();
    return tutors;
  };
}

module.exports = tutorServices;
