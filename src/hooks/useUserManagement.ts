import { useState, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetUsers } from "../queries/users/getUsers";
import { useDeleteUserMutation } from "../queries/users/deleteUser";
import { USER_MANAGEMENT_CONFIG } from "../constants/index";
import { useUpdateUserRoleMutation } from "../queries";
import { USER_ROLES } from "../types";

export const useUserManagement = () => {
  const queryClient = useQueryClient();
  const {
    updateRole,
    loading: roleLoading,
    error: roleError,
  } = useUpdateUserRoleMutation();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [updatingUserId, setUpdatingUserId] = useState<string | null>(null);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState<{
    isOpen: boolean;
    userId: string | null;
  }>({ isOpen: false, userId: null });

  const { users, loading } = useGetUsers(currentPage, searchQuery);
  const { deleteUserMutation } = useDeleteUserMutation(
    currentPage,
    searchQuery
  );

  const filteredUsers = users;
  const totalPages = Math.ceil(
    (filteredUsers.length || 0) / USER_MANAGEMENT_CONFIG.ITEMS_PER_PAGE
  );
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * USER_MANAGEMENT_CONFIG.ITEMS_PER_PAGE,
    currentPage * USER_MANAGEMENT_CONFIG.ITEMS_PER_PAGE
  );

  const handleSearchChange = useCallback((query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleRoleChange = useCallback(
    async (userId: string, newRole: USER_ROLES) => {
      setUpdatingUserId(userId);

      try {
        await updateRole(userId, newRole);
        await queryClient.invalidateQueries({
          queryKey: ["users"],
        });
      } finally {
        setUpdatingUserId(null);
      }
    },
    [updateRole, queryClient]
  );

  const handleDeleteUser = useCallback(
    async (userId: string): Promise<void> => {
      setDeleteConfirmModal({ isOpen: true, userId });
    },
    []
  );

  const handleConfirmDelete = useCallback(async () => {
    const userId = deleteConfirmModal.userId;
    if (!userId) return;

    setDeleteLoading(userId);
    try {
      await deleteUserMutation.mutateAsync(userId);
      setDeleteError(null);
    } catch (error) {
      setDeleteError(
        error instanceof Error ? error.message : "Failed to delete user"
      );
    } finally {
      setDeleteLoading(null);
    }
  }, [deleteConfirmModal.userId, deleteUserMutation]);

  const handleCancelDelete = useCallback(() => {
    setDeleteConfirmModal({ isOpen: false, userId: null });
    setDeleteError(null);
  }, []);

  return {
    users: paginatedUsers,
    allUsers: filteredUsers,
    searchQuery,
    currentPage,
    totalPages,
    loading,
    updatingUserId,
    roleLoading,
    roleError,
    deleteLoading,
    deleteError,
    deleteConfirmModal,
    handleSearchChange,
    handlePageChange,
    handleRoleChange,
    handleDeleteUser,
    handleConfirmDelete,
    handleCancelDelete,
  };
};
