import { welcome } from "./welcome";

describe("login", () => {
  const mockAlert = jest.fn();
  window.alert = mockAlert;

  it("Deve exibir um alert com boas vindas", () => {
    welcome();
    expect(mockAlert).toHaveBeenCalledWith("Seja bem vindo(a) ao Dio Bank!");
  });
});
