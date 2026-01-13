import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import type { OrderByValue, SortByValue } from "../../types";

interface UseSearchUsersParams {
  searchQuery: string;
  page?: number;
  itemsPerPage?: number;
  sortBy?: SortByValue;
  orderBy?: OrderByValue;
  enabled?: boolean;
}

export const useSearchUsers = ({
  searchQuery,
  page = 1,
  itemsPerPage = 10,
  sortBy,
  orderBy,
  enabled = true,
}: UseSearchUsersParams) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [
      "searchUsers",
      { search: searchQuery, page, itemsPerPage, sortBy, orderBy },
    ],
    queryFn: async () => {
      const response = await userService.getUsers({
        find: searchQuery,
        page,
        itemsPerPage,
        sortBy,
        orderBy,
      });
      if (response.success && response.data) {
        return response.data;
      }
      throw new Error(response.message || "Failed to search users");
    },
    staleTime: 2 * 60 * 1000,
    gcTime: 5 * 60 * 1000,
    enabled: enabled,
  });

  const users = data?.data || [];
  const pagination = data?.pagination || null;

  return {
    users,
    pagination,
    loading: isLoading,
    error: error?.message || null,
  };
};
