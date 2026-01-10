import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/userService";
import { QUERY_CONFIG } from "../../constants";

export const useGetUsers = (currentPage: number, searchQuery: string) => {
  const {
    data: users = [],
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
      return response.data?.data || [];
    },
    staleTime: QUERY_CONFIG.STALE_TIMES.USERS,
    gcTime: QUERY_CONFIG.GC_TIMES.USERS,
  });

  return {
    users,
    loading,
    error: error?.message || null,
  };
};
