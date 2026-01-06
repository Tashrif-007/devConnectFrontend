import React from "react";
import AdminTable, { type ColumnDef } from "./AdminTable";
import Pagination from "../feed/Pagination";
import type { User } from "../../services/userService";
import RoleBadge from "./RoleBadge";
import UserActionCell from "./UserActionCell";
import { USER_MANAGEMENT_CONFIG } from "../../constants/adminConstants";

interface UserTableSectionProps {
  users: User[];
  pagination: {
    currentPage: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
  roleLoading: boolean;
  updatingUserId: string | null;
  deleteLoading: string | null;
  roleError: string | null;
  onPageChange: (page: number) => void;
  onPromoteAdmin: (userId: string) => Promise<void>;
  onDemoteUser: (userId: string) => Promise<void>;
  onDeleteUser: (userId: string) => void;
}

const UserTableSection: React.FC<UserTableSectionProps> = ({
  users,
  pagination,
  roleLoading,
  updatingUserId,
  deleteLoading,
  roleError,
  onPageChange,
  onPromoteAdmin,
  onDemoteUser,
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
          onPromoteAdmin={onPromoteAdmin}
          onDemoteUser={onDemoteUser}
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
            currentPage: pagination.currentPage.toString(),
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

export default UserTableSection;
