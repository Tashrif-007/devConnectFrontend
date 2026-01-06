import { useState, useCallback, useEffect } from "react";
import { useUpdateUserRole } from "./useUpdateUserRole";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { fetchUsers } from "../store/userSlice";
import { adminService } from "../services/adminService";
import type { User } from "../types/auth";
import { USER_MANAGEMENT_CONFIG } from "../constants/adminConstants";

export const useUserManagement = () => {
  const dispatch = useAppDispatch();
  const { items: users = [], loading } = useAppSelector((state) => state.users);
  const { updateRole } = useUpdateUserRole();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [updatingUserId, setUpdatingUserId] = useState<string | null>(null);
  const [optimisticUsers, setOptimisticUsers] = useState<User[] | null>(null);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState<{
    isOpen: boolean;
    userId: string | null;
  }>({ isOpen: false, userId: null });

  useEffect(() => {
    dispatch(fetchUsers({ page: currentPage, find: searchQuery }));
  }, [currentPage, searchQuery, dispatch]);

  const filteredUsers = optimisticUsers || users;
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

  const handlePromoteAdmin = useCallback(
    async (userId: string) => {
      setUpdatingUserId(userId);
      const previousUsers = optimisticUsers || users;

      setOptimisticUsers(
        previousUsers.map((user) =>
          user.userId === userId ? { ...user, role: "ADMIN" } : user
        )
      );

      try {
        await updateRole(userId, "ADMIN");
        setOptimisticUsers(null);
        dispatch(fetchUsers({ page: currentPage, find: searchQuery }));
      } catch {
        setOptimisticUsers(null); 
      } finally {
        setUpdatingUserId(null);
      }
    },
    [updateRole, users, optimisticUsers, currentPage, searchQuery, dispatch]
  );

  const handleDemoteUser = useCallback(
    async (userId: string) => {
      setUpdatingUserId(userId);
      const previousUsers = optimisticUsers || users;

      setOptimisticUsers(
        previousUsers.map((user) =>
          user.userId === userId ? { ...user, role: "USER" } : user
        )
      );

      try {
        await updateRole(userId, "USER");
        setOptimisticUsers(null);
        dispatch(fetchUsers({ page: currentPage, find: searchQuery })); 
      } catch {
        setOptimisticUsers(null); 
      } finally {
        setUpdatingUserId(null);
      }
    },
    [updateRole, users, optimisticUsers, currentPage, searchQuery, dispatch]
  );

  const handleDeleteUser = useCallback((userId: string) => {
    setDeleteConfirmModal({ isOpen: true, userId });
  }, []);

  const handleConfirmDelete = useCallback(async () => {
    const userId = deleteConfirmModal.userId;
    if (!userId) return;

    setDeleteLoading(userId);
    setDeleteError(null);

    try {
      await adminService.deleteUser(userId);

      const updatedUsers = (optimisticUsers || users).filter(
        (user) => user.userId !== userId
      );
      setOptimisticUsers(updatedUsers);
      setDeleteConfirmModal({ isOpen: false, userId: null });
      dispatch(fetchUsers({ page: currentPage, find: searchQuery }));
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Failed to delete user";
      setDeleteError(errorMessage);
    } finally {
      setDeleteLoading(null);
    }
  }, [
    deleteConfirmModal.userId,
    optimisticUsers,
    users,
    currentPage,
    searchQuery,
    dispatch,
  ]);

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
    deleteLoading,
    deleteError,
    deleteConfirmModal,
    handleSearchChange,
    handlePageChange,
    handlePromoteAdmin,
    handleDemoteUser,
    handleDeleteUser,
    handleConfirmDelete,
    handleCancelDelete,
  };
};
