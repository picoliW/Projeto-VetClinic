class TutorServices {
  constructor() {}
  // Valida os campos obrigatórios
  validateFields = (data, requiredFields) => {
    for (const field of requiredFields) {
      // Se o que foi enviado no postman não tiver o campo necessário ele retorna um erro
      if (!data[field]) {
        console.log(`The field ${field} is required`);
        return false;
      }
    }
    return true;
  };
}

module.exports = TutorServices;
