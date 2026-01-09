import React from "react";
import AdminSearchBar from "./AdminSearchBar";
import CategoryTableSection from "./CategoryTableSection";
import DeleteCategoryConfirmation from "./DeleteCategoryConfirmation";
import CreateCategoryModal from "../modals/CreateCategoryModal";
import { useCategoryManagement } from "../../hooks/useCategoryManagement";
import { Button } from "../ui";

const CategoryManagement: React.FC = () => {
  const {
    categories,
    pagination,
    searchQuery,
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
  } = useCategoryManagement();

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <AdminSearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
          placeholder="Search categories..."
        />
        <Button
          onClick={() => setCreateModal(true)}
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          + Create Category
        </Button>
      </div>

      <CategoryTableSection
        categories={categories}
        pagination={
          pagination || {
            currentPage: 1,
            totalPages: 1,
            hasPreviousPage: false,
            hasNextPage: false,
          }
        }
        deleteLoading={deleteLoading}
        deleteError={deleteError}
        onPageChange={handlePageChange}
        onDeleteCategory={handleDeleteCategory}
      />

      <DeleteCategoryConfirmation
        isOpen={deleteConfirmModal.isOpen}
        categoryId={deleteConfirmModal.categoryId}
        isLoading={deleteLoading === deleteConfirmModal.categoryId}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />

      <CreateCategoryModal
        isOpen={createModal}
        onClose={() => setCreateModal(false)}
        onSubmit={handleCreateCategory}
        isLoading={createLoading}
        error={createError}
      />
    </div>
  );
};

export default CategoryManagement;
