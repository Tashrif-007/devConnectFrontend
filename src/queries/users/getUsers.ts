import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/userService";

export const useGetUsers = (currentPage: number, searchQuery: string) => {
  const {
    data: users = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["users", { page: currentPage, search: searchQuery }],
    queryFn: async () => {
      const response = await userService.getUsers({
        page: currentPage,
        find: searchQuery,
      });
      return response.data?.data || [];
    },
    staleTime: 2 * 60 * 1000, 
    gcTime: 5 * 60 * 1000,
  });

  return {
    users,
    loading,
    error: error?.message || null,
  };
};
