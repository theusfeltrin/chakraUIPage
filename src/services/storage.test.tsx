import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const chakraUser = {
  userData: null,
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  it("Deve retornar o objeto no localStorage com a chave chakraUser", () => {
    const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("chakraUser");
  });

  it("Deve criar o objeto no localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "chakraUser",
      JSON.stringify(chakraUser)
    );
  });

  it("Deve alterar o valor do objeto no localStorage", () => {
    changeLocalStorage(chakraUser);
    expect(mockSetItem).toHaveBeenCalledWith(
      "chakraUser",
      JSON.stringify(chakraUser)
    );
  });
});
