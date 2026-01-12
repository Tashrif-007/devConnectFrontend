import { useSearchUsers } from "../queries/users/searchUsers";
import { useSearchStories } from "../queries/stories/searchStories";
import type { UseSearchParams, UseSearchReturn } from "../interfaces";


export const useSearch = ({
  searchQuery,
  page = 1,
  itemsPerPage = 5,
  category,
}: UseSearchParams): UseSearchReturn => {
  const usersData = useSearchUsers({
    searchQuery,
    page,
    itemsPerPage,
    enabled: true,
  });

  const storiesData = useSearchStories({
    searchQuery,
    page,
    itemsPerPage,
    category,
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
