import { useQuery } from "@tanstack/react-query";
import { userService } from "../../services/userService";
<<<<<<< HEAD
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
=======

export const useGetUsers = (currentPage: number, searchQuery: string) => {
  const {
    data: users = [],
    isLoading: loading,
    error,
  } = useQuery({
    queryKey: ["users", { page: currentPage, search: searchQuery }],
>>>>>>> 6d2688c (refactor: move all tanstack mutations and query to query directory)
    queryFn: async () => {
      const response = await userService.getUsers({
        page: currentPage,
        find: searchQuery,
      });
<<<<<<< HEAD
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
=======
      return response.data?.data || [];
    },
    staleTime: 2 * 60 * 1000, 
    gcTime: 5 * 60 * 1000,
  });

  return {
    users,
>>>>>>> 6d2688c (refactor: move all tanstack mutations and query to query directory)
    loading,
    error: error?.message || null,
  };
};
