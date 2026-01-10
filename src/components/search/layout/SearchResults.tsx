import React from "react";
import DeveloperCard from "../../feed/DeveloperCard";
import PostCard from "../../feed/PostCard";
import Pagination from "../../feed/Pagination";
import ErrorMessage from "../../modals/forms/ErrorMessage";
import { Paragraph } from "../../ui";
import Spinner from "../../ui/Spinner";
import styles from "./SearchResults.module.css";
import type { PaginationData, User } from "../../../types";
import type { Story } from "../../../interfaces";

interface SearchResultsProps {
  type: "users" | "posts";
  data: User[] | Story[];
  pagination: PaginationData | null;
  loading: boolean;
  error: string | null;
  onPageChange: (page: number) => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({
  type,
  data,
  pagination,
  loading,
  error,
  onPageChange,
}) => {
  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (data.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <Paragraph className={styles.emptyText}>No {type} found</Paragraph>
      </div>
    );
  }

  return (
    <div className={styles.resultsList}>
      {type === "users"
        ? (data as User[]).map((user) => (
            <DeveloperCard key={user.userId} developer={user} />
          ))
        : (data as Story[]).map((story) => (
            <PostCard key={story.storyId} story={story} />
          ))}

      {pagination && pagination.totalPages > 1 && (
        <Pagination pagination={pagination} onPageChange={onPageChange} />
      )}
    </div>
  );
};

export default SearchResults;
