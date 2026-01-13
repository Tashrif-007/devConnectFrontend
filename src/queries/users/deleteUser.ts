import { useMutation, useQueryClient } from "@tanstack/react-query";
import { adminService } from "../../services/adminService";
import type { User } from "../../types";

export const useDeleteUserMutation = (
  currentPage: number,
  searchQuery: string
) => {
  const queryClient = useQueryClient();

  const deleteUserMutation = useMutation({
    mutationFn: async (userId: string) => {
      await adminService.deleteUser(userId);
      return userId;
    },
    onSuccess: (userId) => {
      const oldUsers = queryClient.getQueryData([
        "users",
        { page: currentPage, search: searchQuery },
      ]) as User[];
      if (oldUsers) {
        const updatedUsers = oldUsers.filter((user) => user.userId !== userId);
        queryClient.setQueryData(
          ["users", { page: currentPage, search: searchQuery }],
          updatedUsers
        );
      }
    },
  });

  return {
    deleteUserMutation,
  };
};
