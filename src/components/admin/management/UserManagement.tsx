import React from "react";
import AdminSearchBar from "../search/AdminSearchBar";
import UserTableSection from "./UserTableSection";
import DeleteUserConfirmation from "./DeleteUserConfirmation";
import { useUserManagement } from "../../../hooks/useUserManagement";
import { Button, Paragraph } from "../../ui";
import styles from "./UserManagement.module.css";

const UserManagement: React.FC = () => {
  const {
    users,
    currentPage,
    totalPages,
    searchQuery,
    updatingUserId,
    loading,
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
  } = useUserManagement();

  const pagination = {
    currentPage,
    totalPages,
    hasPreviousPage: currentPage > 1,
    hasNextPage: currentPage < totalPages,
  };
<<<<<<< HEAD:src/components/admin/management/UserManagement.tsx
console.log(users)
=======

>>>>>>> 00cd111 (refactor: use Button, Paragraph, Header components instead html):src/components/admin/UserManagement.tsx
  return (
    <div>
      <AdminSearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        placeholder="Search users..."
      />

      {loading ? (
<<<<<<< HEAD:src/components/admin/management/UserManagement.tsx
        <div className={styles.loadingContainer}>Loading users...</div>
      ) : deleteError ? (
        <div className={styles.errorContainer}>
=======
        <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
          Loading users...
        </div>
      ) : deleteError ? (
        <div className="bg-white rounded-lg shadow p-8 text-center text-red-600">
>>>>>>> 00cd111 (refactor: use Button, Paragraph, Header components instead html):src/components/admin/UserManagement.tsx
          <Paragraph>Error: {deleteError}</Paragraph>
          <Button
            onClick={() => handlePageChange(pagination?.currentPage || 1)}
            className={styles.retryButton}
          >
            Retry
          </Button>
        </div>
      ) : (
        <UserTableSection
          users={users}
          pagination={pagination}
          roleLoading={roleLoading}
          updatingUserId={updatingUserId}
          deleteLoading={deleteLoading}
          roleError={roleError}
          onPageChange={handlePageChange}
          onRoleChange={handleRoleChange}
          onDeleteUser={handleDeleteUser}
        />
      )}

      <DeleteUserConfirmation
        isOpen={deleteConfirmModal.isOpen}
        userId={deleteConfirmModal.userId}
        isLoading={deleteLoading === deleteConfirmModal.userId}
        onConfirm={handleConfirmDelete}
        onCancel={handleCancelDelete}
      />
    </div>
  );
};

export default UserManagement;
