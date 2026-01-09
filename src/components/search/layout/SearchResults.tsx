import React from "react";
import type { User } from "../../types/auth";
import type { Story } from "../../types/story";
import type { PaginationData } from "../../types/pagination";
import DeveloperCard from "../feed/DeveloperCard";
import PostCard from "../feed/PostCard";
import Pagination from "../feed/Pagination";
import ErrorMessage from "../modals/ErrorMessage";
import { Paragraph } from "../ui";
import Spinner from "../ui/Spinner";

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
      <div className="flex justify-center py-12">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-12">
        <Paragraph className="text-gray-600 text-lg">No {type} found</Paragraph>
      </div>
    );
  }

  return (
    <div className="space-y-4">
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
