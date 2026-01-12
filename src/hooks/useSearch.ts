import { useSearchUsers } from "../queries/users/searchUsers";
import { useSearchStories } from "../queries/stories/searchStories";
import { DEFAULT_SORT_BY } from "../constants/search";
import type { UseSearchParams, UseSearchReturn } from "../interfaces";

export const useSearch = ({
  searchQuery,
  page = 1,
  itemsPerPage = 5,
  category,
  sortBy = DEFAULT_SORT_BY,
  orderBy,
}: UseSearchParams): UseSearchReturn => {
  const usersData = useSearchUsers({
    searchQuery,
    page,
    itemsPerPage,
    sortBy,
    orderBy,
    enabled: true,
  });

  const storiesData = useSearchStories({
    searchQuery,
    page,
    itemsPerPage,
    category,
    sortBy,
    orderBy,
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
