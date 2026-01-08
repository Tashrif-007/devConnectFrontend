import React from "react";

interface SearchHeaderProps {
  query: string;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ query }) => {
  return (
    <h1 className="text-3xl font-bold mb-6">
      {query ? (
        <>
          Search Results for "<span className="text-blue-600">{query}</span>"
        </>
      ) : (
        <>Browse All Users & Posts</>
      )}
    </h1>
  );
};

export default SearchHeader;
