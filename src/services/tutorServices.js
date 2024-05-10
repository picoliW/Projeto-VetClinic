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

  // Função para validar o phone
  isValidPhone = (phone) => {
    const phoneRegex = /^[0-9]{11}$/;
    return phoneRegex.test(phone);
  };

  // Função para validar o e-mail
  isValidEmail = (email) => {
    const emailRegex = /@.*\./;
    return emailRegex.test(email);
  };

  // Função para validar o zip code
  isValidZipCode = (zipCode) => {
    const zipCodeRegex = /^[0-9]{5}-[0-9]{3}$/;
    return zipCodeRegex.test(zipCode);
  };

  isWeightNumber = (weight) => {
    if (!Number(weight)) {
      console.log("Weight must be a number");
      return true;
    }
    return false;
  };
}

module.exports = TutorServices;
