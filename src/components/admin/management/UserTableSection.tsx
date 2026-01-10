import React from "react";
import AdminTable, { type ColumnDef } from "../table/AdminTable";
import Pagination from "../../feed/Pagination";
import UserActionCell from "./UserActionCell";
import { USER_MANAGEMENT_CONFIG } from "../../../constants";
import { USER_ROLES, type User } from "../../../types";
import RoleBadge from "./RoleBadge";

interface UserTableSectionProps {
  users: User[];
  pagination: {
    currentPage: number;
    totalPages: number;
  };
  roleLoading: boolean;
  updatingUserId: string | null;
  deleteLoading: string | null;
  roleError: string | null;
  onPageChange: (page: number) => void;
  onRoleChange: (userId: string, newRole: USER_ROLES) => Promise<void>;
  onDeleteUser: (userId: string) => Promise<void>;
}

const UserTableSection: React.FC<UserTableSectionProps> = ({
  users,
  pagination,
  roleLoading,
  updatingUserId,
  deleteLoading,
  roleError,
  onPageChange,
  onRoleChange,
  onDeleteUser,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString(
      "en-US",
      USER_MANAGEMENT_CONFIG.DATE_FORMAT_OPTIONS
    );
  };

  const columns: ColumnDef<User>[] = [
    {
      header: "USERNAME",
      key: "username",
      align: "left",
    },
    {
      header: "ROLE",
      key: "role",
      render: (value: string) => <RoleBadge role={value as "ADMIN" | "USER"} />,
    },
    {
      header: "JOINED DATE",
      key: "joinDate",
      render: (value: string) => formatDate(value),
    },
    {
      header: "ACTIONS",
      key: "actions",
      align: "right",
      render: (_, item: User) => (
        <UserActionCell
          user={item}
          onRoleChange={onRoleChange}
          onDeleteUser={onDeleteUser}
          isUpdating={roleLoading && updatingUserId === item.userId}
          isDeleting={deleteLoading === item.userId}
          error={roleError && updatingUserId === item.userId ? roleError : null}
        />
      ),
    },
  ];

  return (
    <>
      <AdminTable<User>
        columns={columns}
        data={users}
        rowKey="userId"
        emptyMessage="No users found"
      />

      {pagination && (
        <Pagination
          pagination={{
            currentPage: pagination.currentPage,
            totalPages: pagination.totalPages,
            itemsPerPage: USER_MANAGEMENT_CONFIG.ITEMS_PER_PAGE,
            totalItems: users.length,
            hasNextPage: pagination.currentPage < pagination.totalPages,
            hasPreviousPage: pagination.currentPage > 1,
          }}
          onPageChange={onPageChange}
        />
      )}
    </>
  );
};

export default UserTableSection;
