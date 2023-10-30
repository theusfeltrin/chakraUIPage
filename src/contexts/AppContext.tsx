import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../services/storage";

type UserData = {
  email: string;
  password: string;
  name: string;
  balance: number;
  id: string;
};

type IAppContext = {
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  userData: UserData | null;
  setUserData: (data: UserData) => void;
};

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const storage = getAllLocalStorage();

  useEffect(() => {
    if (storage) {
      const { userData } = JSON.parse(storage);
      setIsLoggedIn(!!userData);
      setUserData(userData);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <AppContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, userData, setUserData }}
    >
      {children}
    </AppContext.Provider>
  );
};
