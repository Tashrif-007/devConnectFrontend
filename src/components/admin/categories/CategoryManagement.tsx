import React from "react";
import AdminSearchBar from "../search/AdminSearchBar";
import CategoryTableSection from "./CategoryTableSection";
import DeleteCategoryConfirmation from "./DeleteCategoryConfirmation";
import { useCategoryManagement } from "../../../hooks/useCategoryManagement";
import { Button } from "../../ui";
import CreateCategoryModal from "../../modals/category/CreateCategoryModal";
import styles from "./CategoryManagemen.module.css";

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
      <div className={styles["category-searchbar"]}>
        <AdminSearchBar
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
          placeholder="Search categories..."
        />
        <Button
          onClick={() => setCreateModal(true)}
          className={styles["category-btn"]}
        >
          <span className={styles["button-text"]}>+ Create Category</span>
          <span className={styles["button-icon"]}>+</span>
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
