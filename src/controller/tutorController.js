import TutorRepository from "../models/tutorModel.js";

async function findAll(req, res) {
  const clients = await TutorRepository.findAll();
  res.json(clients);
}

export default { findAll };
