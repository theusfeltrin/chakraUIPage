import { login } from "./login";

describe("login", () => {
  const mockEmail = "mat@email.com";
  const mockPassword = "123456";
  it("Deve exibir um alert com boas vindas caso o email seja válido", async () => {
    const response = await login({
      email: mockEmail,
      password: mockPassword,
    });
    expect(response).toBeTruthy();
  });

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await login({
      email: "email@invalido.com",
      password: mockPassword,
    });
    expect(response).toBeFalsy();
  });

  it("Deve exibir um erro caso a senha seja inválida", async () => {
    const response = await login({
      email: mockEmail,
      password: "123",
    });
    expect(response).toBeFalsy();
  });
});
