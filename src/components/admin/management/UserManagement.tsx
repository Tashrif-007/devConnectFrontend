import React from "react";
import AdminSearchBar from "./AdminSearchBar";
import UserTableSection from "./UserTableSection";
import DeleteUserConfirmation from "./DeleteUserConfirmation";
import { useUserManagement } from "../../hooks/useUserManagement";
import { Button, Paragraph } from "../ui";

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

  return (
    <div>
      <AdminSearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
        placeholder="Search users..."
      />

      {loading ? (
        <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
          Loading users...
        </div>
      ) : deleteError ? (
        <div className="bg-white rounded-lg shadow p-8 text-center text-red-600">
          <Paragraph>Error: {deleteError}</Paragraph>
          <Button
            onClick={() => handlePageChange(pagination?.currentPage || 1)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
