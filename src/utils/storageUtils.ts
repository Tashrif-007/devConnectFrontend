import type { User } from "../types";
import { STORAGE_KEYS } from "./storageKeys";

export const parseStoredUser = (userJson: string | null): User | null => {
  if (!userJson) {
    return null;
  }

  try {
    return JSON.parse(userJson) as User;
  } catch (error) {
    console.error("Failed to parse stored user data:", error);
    localStorage.removeItem(STORAGE_KEYS.USER);
    return null;
  }
};

export const saveStoredUser = (user: User): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
  } catch (error) {
    console.error("Failed to save user to localStorage:", error);
  }
};

export const getStoredUser = (): User | null => {
  const userJson = localStorage.getItem(STORAGE_KEYS.USER);
  return parseStoredUser(userJson);
};

export const getStoredToken = (): string | null => {
  return localStorage.getItem(STORAGE_KEYS.TOKEN);
};

export const clearStoredAuth = (): void => {
  localStorage.removeItem(STORAGE_KEYS.TOKEN);
  localStorage.removeItem(STORAGE_KEYS.USER);
};
