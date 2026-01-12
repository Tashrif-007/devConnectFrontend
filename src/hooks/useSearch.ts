import { useSearchUsers } from "../queries/users/searchUsers";
import { useSearchStories } from "../queries/stories/searchStories";
import type { UseSearchParams, UseSearchReturn } from "../interfaces";

interface UseSearchWithTabParams extends UseSearchParams {
  tab: "users" | "posts";
}

export const useSearch = ({
  searchQuery,
  page = 1,
  itemsPerPage = 5,
  category,
  tab,
  sortBy,
  orderBy,
}: UseSearchWithTabParams): UseSearchReturn => {
  const usersData = useSearchUsers({
    searchQuery,
    page,
    itemsPerPage,
    ...(tab === "users" && sortBy && { sortBy }),
    ...(tab === "users" && orderBy && { orderBy }),
    enabled: true,
  });

  const storiesData = useSearchStories({
    searchQuery,
    page,
    itemsPerPage,
    category,
    ...(tab === "posts" && sortBy && { sortBy }),
    ...(tab === "posts" && orderBy && { orderBy }),
    enabled: true,
  });

  const isLoading = usersData.loading || storiesData.loading;
  const totalUsersCount = usersData.pagination?.totalItems || 0;
  const totalStoriesCount = storiesData.pagination?.totalItems || 0;

  return {
    usersData,
    storiesData,
    isLoading,
    totalUsersCount,
    totalStoriesCount,
  };
};
