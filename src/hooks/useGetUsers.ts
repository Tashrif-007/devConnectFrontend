import { useState, useEffect, useCallback } from "react";
import {
  userService,
  type User,
  type GetUsersParams,
  type UsersPaginationMeta,
} from "../services/userService";

interface UseGetUsersReturn {
  users: User[];
  pagination: UsersPaginationMeta | null;
  loading: boolean;
  error: string | null;
  refetch: (params: GetUsersParams) => void;
}

export const useGetUsers = (
  initialParams: GetUsersParams
): UseGetUsersReturn => {
  const [users, setUsers] = useState<User[]>([]);
  const [pagination, setPagination] = useState<UsersPaginationMeta | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = useCallback(async (params: GetUsersParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await userService.getUsers(params);

      if (response.success) {
        setUsers(response.data.data);
        setPagination(response.data.pagination);
      } else {
        setError("Failed to fetch users");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An error occurred while fetching users";
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(initialParams);
  }, []);

  const refetch = useCallback(
    (params: GetUsersParams) => {
      fetchUsers(params);
    },
    [fetchUsers]
  );

  return { users, pagination, loading, error, refetch };
};
