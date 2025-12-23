import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:3000/api/v1";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  validateStatus: () => true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("devconnect_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const apiClient = {
  async get<T>(endpoint: string, config?: AxiosRequestConfig) {
    const response = await axiosInstance.get<T>(endpoint, config);
    return response.data;
  },

  async post<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig) {
    const response = await axiosInstance.post<T>(endpoint, data, config);
    return response.data;
  },

  async put<T>(endpoint: string, data?: unknown, config?: AxiosRequestConfig) {
    const response = await axiosInstance.put<T>(endpoint, data, config);
    return response.data;
  },

  async delete<T>(endpoint: string, config?: AxiosRequestConfig) {
    const response = await axiosInstance.delete<T>(endpoint, config);
    return response.data;
  },
};
