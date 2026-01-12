import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { SearchContent } from "../components/search";
import Categories from "../components/feed/Categories";
import { Button } from "../components/ui";
import sidebarStyles from "../layouts/Sidebar.module.css";
import styles from "./SearchResultsPage.module.css";

const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const find = searchParams.get("find") || "";
  const tab = (searchParams.get("tab") || "users") as "users" | "posts";
  const page = parseInt(searchParams.get("page") || "1", 10);
  const category = searchParams.get("category") || undefined;

  const itemsPerPage = 5;

  const handleTabChange = (newTab: "users" | "posts") => {
    setSearchParams({
      find,
      tab: newTab,
      page: "1",
      ...(category && { category }),
    });
  };

  const handlePageChange = (newPage: number) => {
    setSearchParams({
      find,
      tab,
      page: String(newPage),
      ...(category && { category }),
    });
  };

  const handleCategoryChange = (categoryName: string | null) => {
    if (categoryName) {
      setSearchParams({ find, tab, page: "1", category: categoryName });
    } else {
      setSearchParams({ find, tab, page: "1" });
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
          itemsPerPage={itemsPerPage}
          onTabChange={handleTabChange}
          onPageChange={handlePageChange}
        />
      </div>
      <div className={styles.desktopSidebar}>
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
            <button
              className={sidebarStyles.closeButton}
              onClick={() => setIsSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <RxCross2 size={24} />
            </button>
            <div className="p-4">
              <Categories
                selectedCategory={category}
                onCategoryChange={handleCategoryChange}
                showClearButton={true}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResultsPage;
