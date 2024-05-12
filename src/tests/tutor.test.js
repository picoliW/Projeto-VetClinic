const tutorController = require("../controller/tutorController");
const TutorController = new tutorController();

// Mock dos modelos Tutor e Pet, mock é como se fosse um banco de dados falso
jest.mock("../models/tutorModel", () => ({
  findAll: jest.fn(),
  destroy: jest.fn(),
}));

jest.mock("../models/petModel", () => ({
  findAll: jest.fn(),
}));

describe("GET /tutors", () => {
  it("should return tutors with their pets", async () => {
    // Mock dos resultados de findAll para Tutor e Pet
    const mockTutors = [{ id: 1, name: "John Doe" }];
    const mockPets = [{ id: 1, name: "Lilo", TutorId: 1 }];

    // Mock deve retornar os valores de mockTutors e mockPets
    require("../models/tutorModel").findAll.mockResolvedValue(mockTutors);
    require("../models/petModel").findAll.mockResolvedValue(mockPets);

    // Mock da response
    const mockRes = {
      json: jest.fn(),
    };

    await TutorController.getTutors({}, mockRes);

    // Verifica se o json do response foi chamado com os tutores e seus pets
    expect(mockRes.json).toHaveBeenCalledWith([
      { id: 1, name: "John Doe", pets: [{ id: 1, name: "Lilo", TutorId: 1 }] },
    ]);
  });
});

describe("DELETE /tutors/:id", () => {
  it("should delete a tutor", async () => {
    // Mock da requisição
    const mockReq = { params: { id: 1 } };

    // Mock da response
    const mockRes = {
      status: jest.fn(),
      json: jest.fn(),
    };

    // Configuração do mock para retornar um valor indicando que o tutor foi deletado
    require("../models/tutorModel").destroy.mockResolvedValue(1);

    await TutorController.deleteTutor(mockReq, mockRes);

    // Verifica se Tutor.destroy foi chamado com o id do tutor que vai ser deletado
    expect(require("../models/tutorModel").destroy).toHaveBeenCalledWith({
      where: { id: 1 },
    });

    // Verifica se o status da resposta foi 200
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });
});
