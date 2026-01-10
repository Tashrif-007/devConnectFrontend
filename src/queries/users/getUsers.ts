import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import { QUERY_CONFIG } from "../../constants";
import type { User } from "../../types";
import type { PaginationData } from "../../types";

export const useGetUsers = (currentPage: number, searchQuery: string) => {
  const {
    data,
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: [
      QUERY_CONFIG.QUERY_KEYS.USERS,
      { page: currentPage, search: searchQuery },
    ],
    queryFn: async () => {
      const response = await userService.getUsers({
        page: currentPage,
        find: searchQuery,
      });
      return response.data;
    },
    staleTime: QUERY_CONFIG.STALE_TIMES.USERS,
    gcTime: QUERY_CONFIG.GC_TIMES.USERS,
  });

  const users: User[] = data?.data || [];
  const pagination: PaginationData | null = data?.pagination || null;

  return {
    users,
    pagination,
    loading,
    error: error?.message || null,
  };
};
