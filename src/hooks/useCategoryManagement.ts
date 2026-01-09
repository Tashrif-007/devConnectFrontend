import { useState, useCallback } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useGetCategories } from "../queries/categories/getCategories";
import { useDeleteCategoryMutation } from "../queries/categories/deleteCategory";
import { categoryService } from "../services/categoryService";
import { USER_MANAGEMENT_CONFIG } from "../constants/index";

export const useCategoryManagement = () => {
  const queryClient = useQueryClient();
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [deleteLoading, setDeleteLoading] = useState<string | null>(null);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);
  const [deleteConfirmModal, setDeleteConfirmModal] = useState<{
    isOpen: boolean;
    categoryId: string | null;
  }>({ isOpen: false, categoryId: null });
  const [createModal, setCreateModal] = useState(false);

  const { categories: allCategories } = useGetCategories();
  const { deleteCategoryMutation } = useDeleteCategoryMutation();

  const filteredCategories = allCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (category.description
        ?.toLowerCase()
        .includes(searchQuery.toLowerCase()) ??
        false)
  );

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
      try {
        await deleteCategoryMutation.mutateAsync(categoryId);
        setDeleteError(null);
      } catch (error) {
        setDeleteError(
          error instanceof Error ? error.message : "Failed to delete category"
        );
      } finally {
        setDeleteLoading(null);
      }
    },
    [deleteCategoryMutation]
  );

  const handleCancelDelete = useCallback(() => {
    setDeleteConfirmModal({ isOpen: false, categoryId: null });
  }, []);

  const handleCreateCategory = useCallback(
    async (payload: { name: string; description?: string }) => {
      setCreateLoading(true);
      try {
        const newCategory = await categoryService.createCategory(payload);
        const updatedCategories = [...allCategories, newCategory];
        queryClient.setQueryData(["categories"], updatedCategories);
        setCreateModal(false);
        setCreateError(null);
      } catch (error) {
        setCreateError(
          error instanceof Error ? error.message : "Failed to create category"
        );
      } finally {
        setCreateLoading(false);
      }
    },
    [allCategories, queryClient]
  );

  return {
    categories: paginatedCategories,
    allCategories,
    pagination,
    searchQuery,
    currentPage,
    deleteLoading,
    deleteError,
    createLoading,
    createError,
    deleteConfirmModal,
    createModal,
    handleSearch,
    handlePageChange,
    handleDeleteCategory,
    handleConfirmDelete,
    handleCancelDelete,
    handleCreateCategory,
    setCreateModal,
  };
};
