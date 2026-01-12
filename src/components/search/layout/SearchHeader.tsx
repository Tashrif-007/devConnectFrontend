import React from "react";
import styles from "./SearchHeader.module.css";

interface SearchHeaderProps {
  query: string;
}

const SearchHeader: React.FC<SearchHeaderProps> = ({ query }) => {
  return (
    <h1 className={styles.heading}>
      {query ? (
        <>
          Search Results for "<span className={styles.query}>{query}</span>"
        </>
      ) : (
        <>Browse All Users & Posts</>
      )}
    </h1>
  );
};

export default SearchHeader;
