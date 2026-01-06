import { useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "./reduxHooks";
import { adminService } from "../services/adminService";
import { categoryService } from "../services/categoryService";
import { fetchCategories } from "../store/categorySlice";
import { USER_MANAGEMENT_CONFIG } from "../constants/adminConstants";
import type { Category } from "../types";

export const useCategoryManagement = () => {
  const dispatch = useAppDispatch();
  const { items: allCategories } = useAppSelector((state) => state.categories);

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [optimisticCategories, setOptimisticCategories] = useState<
    Category[] | null
  >(null);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState<{
    isOpen: boolean;
    categoryId: string | null;
  }>({ isOpen: false, categoryId: null });
  const [createModal, setCreateModal] = useState(false);

  // Filter categories based on search query
  const filteredCategories = (optimisticCategories || allCategories).filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (category.description
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ??
        false)
  );

  // Pagination
  const itemsPerPage = USER_MANAGEMENT_CONFIG.ITEMS_PER_PAGE;
  const totalPages = Math.ceil(filteredCategories.length / itemsPerPage);
  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const pagination = {
    currentPage,
    totalPages,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
    totalItems: filteredCategories.length,
  };

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  }, []);

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleDeleteCategory = useCallback((categoryId: string) => {
    setDeleteConfirmModal({ isOpen: true, categoryId });
  }, []);

  const handleConfirmDelete = useCallback(
    async (categoryId: string) => {
      setDeleteLoading(categoryId);
      setDeleteError(null);

      // Optimistic UI: remove category from list immediately
      const updatedCategories = (optimisticCategories || allCategories).filter(
        (category) => category.categoryId !== categoryId
      );
      setOptimisticCategories(updatedCategories);

      try {
        await adminService.deleteCategory(categoryId);
        // Refetch in background
        dispatch(fetchCategories());
      } catch (err) {
        // Rollback on failure
        setOptimisticCategories(null);
        setDeleteError(
          err instanceof Error ? err.message : "Failed to delete category"
        );
      } finally {
        setDeleteLoading(null);
        setDeleteConfirmModal({ isOpen: false, categoryId: null });
      }
    },
    [allCategories, optimisticCategories, dispatch]
  );

  const handleCancelDelete = useCallback(() => {
    setDeleteConfirmModal({ isOpen: false, categoryId: null });
  }, []);

  const handleCreateCategory = useCallback(
    async (payload: { name: string; description?: string }) => {
      setCreateLoading(true);
      setCreateError(null);

      try {
        const newCategory = await categoryService.createCategory(payload);
        // Add to optimistic list
        const updatedCategories = [
          ...(optimisticCategories || allCategories),
          newCategory,
        ];
        setOptimisticCategories(updatedCategories);
        // Refetch in background
        dispatch(fetchCategories());
        setCreateModal(false);
      } catch (err) {
        setCreateError(
          err instanceof Error ? err.message : "Failed to create category"
        );
      } finally {
        setCreateLoading(false);
      }
    },
    [allCategories, optimisticCategories, dispatch]
  );

  return {
    // Data
    categories: paginatedCategories,
    allCategories: optimisticCategories || allCategories,
    pagination,
    searchQuery,
    currentPage,

    // States
    deleteLoading,
    deleteError,
    createLoading,
    createError,
    deleteConfirmModal,
    createModal,

    // Handlers
    handleSearch,
    handlePageChange,
    handleDeleteCategory,
    handleConfirmDelete,
    handleCancelDelete,
    handleCreateCategory,
    setCreateModal,
  };
};
