import React, { useState, type ReactNode } from "react";
import AuthContext, { type AuthContextType } from "./AuthContext";
import type { User } from "../types";
import {
  getStoredUser,
  getStoredToken,
  saveStoredUser,
  clearStoredAuth,
} from "../utils/storageUtils";
import { STORAGE_KEYS } from "../utils/storageKeys";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<{
    user: User | null;
    token: string | null;
    isLoading: boolean;
  }>(() => {
    const storedToken = getStoredToken();
    const storedUser = getStoredUser();

    if (storedToken && storedUser) {
      return {
        user: storedUser,
        token: storedToken,
        isLoading: false,
      };
    }

    return {
      user: null,
      token: null,
      isLoading: false,
    };
  });

  const login = (newUser: User, newToken: string) => {
    setAuthState({
      user: newUser,
      token: newToken,
      isLoading: false,
    });
    saveStoredUser(newUser);
    localStorage.setItem(STORAGE_KEYS.TOKEN, newToken);
  };

  const logout = () => {
    setAuthState({
      user: null,
      token: null,
      isLoading: false,
    });
    clearStoredAuth();
  };

  const value: AuthContextType = {
    user: authState.user,
    token: authState.token,
    isAuthenticated: !!authState.token,
    login,
    logout,
    isLoading: authState.isLoading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
