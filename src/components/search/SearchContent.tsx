import React from "react";
import { useSearch } from "../../hooks/useSearch";
import SearchHeader from "./SearchHeader";
import SearchTab from "./SearchTab";
import SearchResults from "./SearchResults";

interface SearchContentProps {
  find: string;
  tab: "users" | "posts";
  page: number;
  category: string | undefined;
  itemsPerPage: number;
  onTabChange: (newTab: "users" | "posts") => void;
  onPageChange: (newPage: number) => void;
}

const SearchContent: React.FC<SearchContentProps> = ({
  find,
  tab,
  page,
  category,
  itemsPerPage,
  onTabChange,
  onPageChange,
}) => {
  const { usersData, storiesData, totalUsersCount, totalStoriesCount } =
    useSearch({
      searchQuery: find,
      page,
      itemsPerPage,
      category,
    });

  return (
    <div className="flex-1">
      <SearchHeader query={find} />
      <div className="flex gap-4 border-b border-gray-200 mb-6">
        <SearchTab
          name="Users"
          count={totalUsersCount}
          isActive={tab === "users"}
          onClick={() => onTabChange("users")}
        />
        <SearchTab
          name="Posts"
          count={totalStoriesCount}
          isActive={tab === "posts"}
          onClick={() => onTabChange("posts")}
        />
      </div>
      {tab === "users" && (
        <SearchResults
          type="users"
          data={usersData.users}
          pagination={usersData.pagination}
          loading={usersData.loading}
          error={usersData.error}
          onPageChange={onPageChange}
        />
      )}
      {tab === "posts" && (
        <SearchResults
          type="posts"
          data={storiesData.stories}
          pagination={storiesData.pagination}
          loading={storiesData.loading}
          error={storiesData.error}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export default SearchContent;
