import React from "react";
import { useSearch } from "../../../hooks/useSearch";
import SearchHeader from "../layout/SearchHeader";
import SearchTab from "./SearchTab";
import SearchResults from "../layout/SearchResults";
import styles from "./SearchContent.module.css";
import type { OrderByValue, SortByValue } from "../../../types";

interface SearchContentProps {
  find: string;
  tab: "users" | "posts";
  page: number;
  category: string | undefined;
  sortBy: SortByValue;
  orderBy: OrderByValue;
  itemsPerPage: number;
  onTabChange: (newTab: "users" | "posts") => void;
  onPageChange: (newPage: number) => void;
}

const SearchContent: React.FC<SearchContentProps> = ({
  find,
  tab,
  page,
  category,
  sortBy,
  orderBy,
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
      sortBy,
      orderBy,
    });

  return (
    <div className={styles.container}>
      <SearchHeader query={find} />
      <div className={styles.tabsContainer}>
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
