import React from "react";
import { useSearchParams } from "react-router-dom";
import { SearchContent } from "../components/search";
import Categories from "../components/feed/Categories";

const SearchResultsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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
      <div className="max-w-7xl mx-auto px-4 py-8 flex justify-between gap-6">
        <SearchContent
          find={find}
          tab={tab}
          page={page}
          category={category}
          itemsPerPage={itemsPerPage}
          onTabChange={handleTabChange}
          onPageChange={handlePageChange}
        />
        <Categories
          selectedCategory={category}
          onCategoryChange={handleCategoryChange}
          showClearButton={true}
        />
      </div>
  );
};

export default SearchResultsPage;
