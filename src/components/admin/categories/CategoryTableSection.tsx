import React from "react";
import AdminTable, { type ColumnDef } from "../table/AdminTable";
import Pagination from "../../feed/Pagination";
import { FiTrash2 } from "react-icons/fi";
import type { Category } from "../../../types";
import { Button } from "../../ui";
import styles from "./CategoryTableSection.module.css";

interface CategoryTableSectionProps {
  categories: Category[];
  pagination: {
    currentPage: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  deleteLoading: string | null;
  deleteError: string | null;
  onPageChange: (page: number) => void;
  onDeleteCategory: (categoryId: string) => void;
}

const CategoryTableSection: React.FC<CategoryTableSectionProps> = ({
  categories,
  pagination,
  deleteLoading,
  deleteError,
  onPageChange,
  onDeleteCategory,
}) => {
  const columns: ColumnDef<Category>[] = [
    {
      header: "CATEGORY NAME",
      key: "name",
      align: "left",
    },
    {
      header: "DESCRIPTION",
      key: "description",
      render: (value: string | undefined) => value || "-",
    },
    {
      header: "ACTIONS",
      key: "createdAt",
      align: "right",
      render: (_, item: Category) => (
        <div className={styles.actionContainer}>
          {deleteError && deleteError.includes(item.categoryId) && (
            <span className={styles.errorText}>{deleteError}</span>
          )}
          <Button
            onClick={() => onDeleteCategory(item.categoryId)}
            disabled={deleteLoading === item.categoryId}
            className={
              deleteLoading === item.categoryId
                ? styles.deleteButtonLoading
                : styles.deleteButton
            }
          >
            {deleteLoading === item.categoryId ? (
              <span className={styles.loadingIndicator}>...</span>
            ) : (
              <FiTrash2 size={18} />
            )}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <AdminTable<Category>
        columns={columns}
        data={categories}
        rowKey="categoryId"
        emptyMessage="No categories found"
      />

      {pagination && pagination.totalPages > 1 && (
        <Pagination
          pagination={{
            currentPage: pagination.currentPage,
            totalPages: pagination.totalPages,
            hasPreviousPage: pagination.hasPreviousPage,
            hasNextPage: pagination.hasNextPage,
          }}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};

export default CategoryTableSection;
