import { createContext } from "react";
import { Role } from "../enums/Role";
import { User } from "../models/User";

interface UserContextModel {
  user: User;
  setUser: (user: User) => void;
}

export const getDefaultUser = (): User => ({
  id: 0,
  role: Role.Student,
  displayName: "",
  email: "",
  isAuthenticated: false,
});

export const getDefaultUserContextModel = (): UserContextModel => ({
  setUser: () => {},
  user: getDefaultUser(),
});

export const UserContext = createContext<UserContextModel>(
  getDefaultUserContextModel()
);
