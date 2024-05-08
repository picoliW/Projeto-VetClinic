class TutorServices {
  constructor() {}
  // Valida os campos obrigatórios
  validateFields = (data, requiredFields) => {
    for (const field of requiredFields) {
      if (!data[field]) {
        console.log(`The field ${field} is required`);
        return false;
      }
    }
    return true;
  };
}

module.exports = TutorServices;
