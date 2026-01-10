import { apiClient } from "./apiClient";
import { API_ENDPOINTS } from "../constants";
import type {
  GetUsersParams,
  GetUsersResponse,
  GetUserByIdResponse,
} from "../types";

export const userService = {
  async getUsers(params: GetUsersParams): Promise<GetUsersResponse> {
    const queryString = new URLSearchParams();

    if (params.page) queryString.append("page", params.page.toString());
    if (params.itemsPerPage)
      queryString.append("itemsPerPage", params.itemsPerPage.toString());
    if (params.sortBy) queryString.append("sortBy", params.sortBy);
    if (params.orderBy) queryString.append("orderBy", params.orderBy);
    if (params.find) queryString.append("find", params.find);

    const endpoint = `${API_ENDPOINTS.USERS.BASE}${
      queryString.toString() ? `?${queryString.toString()}` : ""
    }`;
    return apiClient.get<GetUsersResponse>(endpoint);
  },

  async getUserById(userId: string): Promise<GetUserByIdResponse> {
    const endpoint = API_ENDPOINTS.USERS.BY_ID(userId);
    return apiClient.get<GetUserByIdResponse>(endpoint);
  },

  async updateUser(updatePayload: FormData): Promise<GetUserByIdResponse> {
    const endpoint = `/users/profile`;
    return apiClient.put<GetUserByIdResponse>(endpoint, updatePayload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
