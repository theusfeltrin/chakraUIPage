import { api } from "../api";

type loginInput = {
  email: string;
  password: string;
};

export const login = async ({
  email,
  password,
}: loginInput): Promise<boolean> => {
  const data: any = await api;

  if (email !== data.email) {
    return false;
  }
  if (password !== data.password) {
    return false;
  }

  return true;
};
