import React, { createContext, useState, useContext } from "react";
import { api } from "../../services/axios";

interface userPost {
  name: string;
  email: string;
  password: string;
  id: string;
}

interface UserContextProps {
  user: [] | null;
  setUser: (data: [] | null) => [] | any;
  CreateUser: (user: userPost) => Promise<any>;
}

const UserContext = createContext({} as UserContextProps);

export function ContextUserProvider({ children }: any) {
  const [user, setUser] = useState<[] | null>(null);
  async function CreateUser(user: userPost) {
    const response = await api.post("users", user);
    return response;
  }
  return (
    <UserContext.Provider value={{ CreateUser, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const data = useContext(UserContext);

  return data;
}
