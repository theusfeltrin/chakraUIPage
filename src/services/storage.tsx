import { UserData } from "../types/userData";

interface IDIoBank {
  userData: UserData | null;
}

const chakraUser = {
  userData: null,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("chakraUser");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("chakraUser", JSON.stringify(chakraUser));
};

export const changeLocalStorage = (chakraUser: IDIoBank): void => {
  localStorage.setItem("chakraUser", JSON.stringify(chakraUser));
};
