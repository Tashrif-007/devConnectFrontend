import type { User } from "./auth";
import type { PaginationData } from "./pagination";
import type { Story } from "./stories";

export interface UseSearchParams {
  searchQuery: string;
  page?: number;
  itemsPerPage?: number;
  category?: string;
}

export interface UseSearchReturn {
  usersData: {
    users: User[];
    pagination: PaginationData | null;
    loading: boolean;
    error: string | null;
  };
  storiesData: {
    stories: Story[];
    pagination: PaginationData | null;
    loading: boolean;
    error: string | null;
  };
  isLoading: boolean;
  totalUsersCount: number;
  totalStoriesCount: number;
}
