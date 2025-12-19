import React, { useState, type ReactNode } from "react";
import AuthContext, { type AuthContextType } from "./AuthContext";
import type { LoginUser } from "../types";

interface AuthProviderProps {
  children: ReactNode;
}

const STORAGE_KEYS = {
  TOKEN: "devconnect_token",
  USER: "devconnect_user",
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<{
    user: LoginUser | null;
    token: string | null;
    isLoading: boolean;
  }>(() => {
    const storedToken = localStorage.getItem(STORAGE_KEYS.TOKEN);
    const storedUser = localStorage.getItem(STORAGE_KEYS.USER);

    if (storedToken && storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        return {
          user: parsedUser,
          token: storedToken,
          isLoading: false,
        };
      } catch (error) {
        console.error("Failed to parse stored user data:", error);
        localStorage.removeItem(STORAGE_KEYS.TOKEN);
        localStorage.removeItem(STORAGE_KEYS.USER);
      }
    }

    return {
      user: null,
      token: null,
      isLoading: false,
    };
  });

  const login = (newUser: LoginUser, newToken: string) => {
    setAuthState({
      user: newUser,
      token: newToken,
      isLoading: false,
    });
    localStorage.setItem(STORAGE_KEYS.TOKEN, newToken);
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(newUser));
  };

  const logout = () => {
    setAuthState({
      user: null,
      token: null,
      isLoading: false,
    });
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    localStorage.removeItem(STORAGE_KEYS.USER);
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
