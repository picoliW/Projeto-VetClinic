const tutorController = require("../controller/tutorController");
const TutorController = new tutorController();

// Mock dos modelos Tutor e Pet, mock é como se fosse um banco de dados falso
jest.mock("../models/tutorModel", () => ({
  findAll: jest.fn(),
}));

jest.mock("../models/petModel", () => ({
  findAll: jest.fn(),
}));

describe("GET /tutors", () => {
  it("should return tutors with their pets", async () => {
    // Mock dos resultados de findAll para Tutor e Pet
    const mockTutors = [{ id: 1, name: "John Doe" }];
    const mockPets = [{ id: 1, name: "Lilo", TutorId: 1 }];

    // Configuração dos mocks para retornar os resultados esperados
    require("../models/tutorModel").findAll.mockResolvedValue(mockTutors);
    require("../models/petModel").findAll.mockResolvedValue(mockPets);

    // Mock da função json do objeto response
    const mockRes = {
      json: jest.fn(),
    };

    // Chama o método getTutors do tutorController passando os mocks de request e response
    await TutorController.getTutors({}, mockRes);

    // Verifica se o método json do response foi chamado com os tutores e seus pets
    expect(mockRes.json).toHaveBeenCalledWith([
      { id: 1, name: "John Doe", pets: [{ id: 1, name: "Lilo", TutorId: 1 }] },
    ]);
  });
});
