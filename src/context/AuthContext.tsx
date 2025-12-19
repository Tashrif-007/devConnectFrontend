import { createContext } from "react";
import type { LoginUser } from "../types";

export interface AuthContextType {
  user: LoginUser | null;
  token: string | null;
  isAuthenticated: boolean;
  login: (user: LoginUser, token: string) => void;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default AuthContext;
