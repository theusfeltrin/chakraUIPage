import { api } from "../api";
import { UserData } from "../types/userData";
import { changeLocalStorage } from "./storage";

type LoginInput = {
  email: string;
  password: string;
};

export const login = async ({
  email,
  password,
}: LoginInput): Promise<boolean> => {
  const data: any | UserData = await api;

  if (email !== data.email) {
    return false;
  }
  if (password !== data.password) {
    return false;
  }

  changeLocalStorage({ userData: data });

  return true;
};
