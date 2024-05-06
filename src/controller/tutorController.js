const TutorRepository = require("../models/tutorModel");

async function findAll(req, res) {
  console.log("clients");
  const clients = await TutorRepository.findAll();

  res.json(clients);
}

module.exports = findAll;
