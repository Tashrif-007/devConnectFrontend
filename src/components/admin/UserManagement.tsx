import React from "react";
import AdminSearchBar from "./AdminSearchBar";
import UserTableSection from "./UserTableSection";
import DeleteUserConfirmation from "./DeleteUserConfirmation";
import { useUserManagement } from "../../hooks/useUserManagement";
import { Button } from "../common";

const UserManagement: React.FC = () => {
  const {
    users,
    pagination,
    searchQuery,
    updatingUserId,
    loading,
    error,
    roleError,
    roleLoading,
    deleteLoading,
    deleteConfirmModal,
    handleSearch,
    handlePageChange,
    handlePromoteAdmin,
    handleDemoteUser,
    handleDeleteUser,
    handleConfirmDelete,
    handleCancelDelete,
  } = useUserManagement();

  return (
    <div>
      <AdminSearchBar
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        placeholder="Search users..."
      />

      {loading ? (
        <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
          Loading users...
        </div>
      ) : error ? (
        <div className="bg-white rounded-lg shadow p-8 text-center text-red-600">
          <p>Error: {error}</p>
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
          pagination={
            pagination || {
              currentPage: 1,
              totalPages: 1,
              hasPreviousPage: false,
              hasNextPage: false,
            }
          }
          roleLoading={roleLoading}
          updatingUserId={updatingUserId}
          deleteLoading={deleteLoading}
          roleError={roleError}
          onPageChange={handlePageChange}
          onPromoteAdmin={handlePromoteAdmin}
          onDemoteUser={handleDemoteUser}
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
