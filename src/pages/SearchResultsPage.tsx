import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { SearchContent } from "../components/search";
import Categories from "../components/feed/Categories";
import SortFilter from "../components/search/filters/SortFilter";
import { Button } from "../components/ui";
import sidebarStyles from "../layouts/Sidebar.module.css";
import styles from "./SearchResultsPage.module.css";
import type { OrderByValue, SortByValue } from "../types";

const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const find = searchParams.get("find") || "";
  const tab = (searchParams.get("tab") || "users") as "users" | "posts";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const category = searchParams.get("category") || undefined;

  const usersSortBy = searchParams.get("usersSortBy") || undefined;
  const usersOrderBy = searchParams.get("usersOrderBy") || undefined;
  const postsSortBy = searchParams.get("postsSortBy") || undefined;
  const postsOrderBy = searchParams.get("postsOrderBy") || undefined;

  const currentSortBy = tab === "users" ? usersSortBy : postsSortBy;
  const currentOrderBy = tab === "users" ? usersOrderBy : postsOrderBy;

  const itemsPerPage = 5;

  const handleTabChange = (newTab: "users" | "posts") => {
    setSearchParams({
      find,
      tab: newTab,
      page: "1",
      ...(usersSortBy && newTab === "users" && { usersSortBy }),
      ...(usersOrderBy && newTab === "users" && { usersOrderBy }),
      ...(postsSortBy && newTab === "posts" && { postsSortBy }),
      ...(postsOrderBy && newTab === "posts" && { postsOrderBy }),
      ...(category && { category }),
    });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      find,
      tab,
      page: String(newPage),
      ...(usersSortBy && tab === "users" && { usersSortBy }),
      ...(usersOrderBy && tab === "users" && { usersOrderBy }),
      ...(postsSortBy && tab === "posts" && { postsSortBy }),
      ...(postsOrderBy && tab === "posts" && { postsOrderBy }),
      ...(category && { category }),
    });
  };

  const handleCategoryChange = (categoryName: string | null) => {
    setSearchParams({
      find,
      tab,
      page: "1",
      ...(usersSortBy && tab === "users" && { usersSortBy }),
      ...(usersOrderBy && tab === "users" && { usersOrderBy }),
      ...(postsSortBy && tab === "posts" && { postsSortBy }),
      ...(postsOrderBy && tab === "posts" && { postsOrderBy }),
      ...(categoryName && { category: categoryName }),
    });
  };

  const handleSortByChange = (value: string) => {
    if (tab === "users") {
      setSearchParams({
        find,
        tab,
        page: "1",
        ...(value && { usersSortBy: value }),
        ...(usersOrderBy && { usersOrderBy }),
        ...(category && { category }),
      });
    } else {
      setSearchParams({
        find,
        tab,
        page: "1",
        ...(value && { postsSortBy: value }),
        ...(postsOrderBy && { postsOrderBy }),
        ...(category && { category }),
      });
    }
  };

  const handleOrderByChange = (value: string) => {
    if (tab === "users") {
      setSearchParams({
        find,
        tab,
        page: "1",
        ...(usersSortBy && { usersSortBy }),
        ...(value && { usersOrderBy: value }),
        ...(category && { category }),
      });
    } else {
      setSearchParams({
        find,
        tab,
        page: "1",
        ...(postsSortBy && { postsSortBy }),
        ...(value && { postsOrderBy: value }),
        ...(category && { category }),
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <Button
          className={styles.sidebarToggle}
          onClick={() => setIsSidebarOpen(true)}
          aria-label="Open sidebar"
        >
          <RxHamburgerMenu size={24} />
        </Button>
        <SearchContent
          find={find}
          tab={tab}
          page={page}
          category={category}
          sortBy={currentSortBy as SortByValue | undefined}
          orderBy={currentOrderBy as OrderByValue | undefined}
          itemsPerPage={itemsPerPage}
          onTabChange={handleTabChange}
          onPageChange={handlePageChange}
        />
      </div>

      <div className={styles.desktopSidebar}>
        <SortFilter
          tab={tab}
          sortBy={currentSortBy as SortByValue | undefined}
          orderBy={currentOrderBy as OrderByValue | undefined}
          onSortByChange={handleSortByChange}
          onOrderByChange={handleOrderByChange}
        />
        <Categories
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
          showClearButton={true}
        />
      </div>

      {isSidebarOpen && (
        <>
          <div
            className={sidebarStyles.backdrop}
            onClick={() => setIsSidebarOpen(false)}
          ></div>
          <div className={sidebarStyles.drawer}>
            <Button
              className={sidebarStyles.closeButton}
              onClick={() => setIsSidebarOpen(false)}
            >
              <RxCross2 size={24} />
            </Button>
            <div className="p-4">
              <SortFilter
                tab={tab}
                sortBy={currentSortBy as SortByValue | undefined}
                orderBy={currentOrderBy as OrderByValue | undefined}
                onSortByChange={handleSortByChange}
                onOrderByChange={handleOrderByChange}
              />
              <div className="mt-4">
                <Categories
                  selectedCategory={category}
                  onCategoryChange={handleCategoryChange}
                  showClearButton={true}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
