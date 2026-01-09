import { useQuery } from "@tanstack/react-query";
import { userService } from "../services/userService";
import type { User } from "../types";

interface UseGetUserProfileReturn {
  user: User | null;
  loading: boolean;
  error: string | null;
}

export const useGetUserProfile = (userId: string): UseGetUserProfileReturn => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["userProfile", userId],
    queryFn: async () => {
      const response = await userService.getUserById(userId);
      if (response.success) {
        return response.data;
      } else {
        throw new Error(response.error || "Failed to fetch user profile");
      }
    },
    enabled: !!userId,
    staleTime: 5 * 60 * 1000,
  });

  return {
    user: data || null,
    loading: isLoading,
    error: error ? (error as Error).message : null,
  };
};
